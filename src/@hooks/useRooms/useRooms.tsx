import { useAuth0 } from '@auth0/auth0-react';
import { Rooms } from '@database';
import { RoomInterface } from '@types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useRooms = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<RoomInterface[] | null>();

	const { user } = useAuth0();

	const rooms = useMemo(() => new Rooms(user?.sub as string), [user?.sub]);

	const updateRooms = useCallback(async () => {
		setIsLoading(true);
		const data = await Rooms.getRooms();
		setData(data);
		setIsLoading(false);
	}, [setIsLoading, setData]);

	const createRoom = async () => {
		await rooms.createRoom();
		updateRooms();
	};

	const deleteRoom = async (roomId: string) => {
		await Rooms.deleteRoom(roomId);
		updateRooms();
	};

	const leaveRoom = (roomId: string) => Rooms.leaveRoom(roomId);
	const joinRoom = (roomId: string) => rooms.joinRoom(roomId);

	useEffect(() => {
		updateRooms();
	}, [updateRooms]);

	return {
		isLoading,
		data,
		createRoom,
		leaveRoom,
		joinRoom,
		deleteRoom,
	};
};
