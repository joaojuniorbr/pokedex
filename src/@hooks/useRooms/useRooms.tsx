import { useAuth0 } from '@auth0/auth0-react';
import { database, Rooms } from '@database';
import { RoomInterface } from '@types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useRooms = (initRoomId?: string) => {
	const [isLoading, setIsLoading] = useState(true);

	const [data, setData] = useState<RoomInterface[] | null>();
	const [room, setRoom] = useState<RoomInterface | null>();

	const { user } = useAuth0();

	const rooms = useMemo(() => new Rooms(user?.sub as string), [user?.sub]);

	const getRoom = useCallback(
		async (roomId: string) => {
			const dataRoom = await Rooms.getRoom(roomId || (initRoomId as string));
			setRoom(dataRoom);
			return dataRoom;
		},
		[initRoomId, setRoom]
	);

	const updateRooms = useCallback(async () => {
		setIsLoading(true);
		const data = await Rooms.getRooms();
		setData(data);
		setIsLoading(false);

		if (initRoomId) {
			getRoom(initRoomId);
		}
	}, [setIsLoading, setData, getRoom, initRoomId]);

	const createRoom = async () => {
		await rooms.createRoom();
		updateRooms();
	};

	const deleteRoom = async (roomId: string) => {
		await Rooms.deleteRoom(roomId);
		updateRooms();
	};

	const leaveRoom = async (roomId: string) => {
		await Rooms.leaveRoom(roomId);
		updateRooms();
	};

	const updateRoom = async (
		roomId: string,
		field: keyof RoomInterface,
		value?: string | boolean
	) => {
		await Rooms.updateRoom(roomId, field, value);
		updateRooms();
	};

	useEffect(() => {
		updateRooms();

		const channel = database
			.channel('rooms')
			.on(
				'postgres_changes',
				{ event: '*', schema: 'public', table: 'rooms' },
				(payload) => {
					const { eventType, new: newRoom, old: oldRoom } = payload;

					if (eventType === 'INSERT') {
						setData((prevRooms) =>
							prevRooms
								? [...prevRooms, newRoom as RoomInterface]
								: [newRoom as RoomInterface]
						);
					} else if (eventType === 'UPDATE') {
						setData((prevRooms) =>
							prevRooms?.map((room) =>
								room.id === newRoom.id ? (newRoom as RoomInterface) : room
							)
						);
					} else if (eventType === 'DELETE') {
						setData((prevRooms) =>
							prevRooms?.filter((room) => room.id !== oldRoom.id)
						);
					}
				}
			)
			.subscribe();
		return () => {
			database.removeChannel(channel);
		};
	}, [updateRooms]);

	useEffect(() => {
		const channel = database
			.channel(`room-${initRoomId}`)
			.on(
				'postgres_changes',
				{ event: 'UPDATE', schema: 'public', table: 'rooms' },
				(payload) => {
					getRoom(payload.new.id);
				}
			)
			.subscribe();

		return () => {
			database.removeChannel(channel);
		};
	}, [initRoomId, getRoom]);

	useEffect(() => {
		if (initRoomId) {
			getRoom(initRoomId);
		}
	}, [initRoomId, getRoom]);

	return {
		isLoading,
		data,
		room,
		getRoom,
		createRoom,
		leaveRoom,
		updateRoom,
		deleteRoom,
	};
};
