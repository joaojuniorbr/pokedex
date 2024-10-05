import { useCallback, useEffect, useRef } from 'react';

import { Button, Spin } from 'antd';
import autoAnimate from '@formkit/auto-animate';

import { PageHeader } from '@compoents/atoms';
import { useRooms } from '@hooks/useRooms';
import { RoomCard } from '@compoents/molecules';

export const RoomsPage = () => {
	const { data, isLoading, createRoom, deleteRoom } = useRooms();

	const handleCreateRoom = useCallback(() => createRoom(), [createRoom]);

	const parent = useRef(null);

	const handleDeleteRoom = useCallback(
		(roomId: string) => () => deleteRoom(roomId),
		[deleteRoom]
	);

	useEffect(() => {
		if (parent.current) {
			autoAnimate(parent.current);
		}
	}, [parent]);

	return (
		<Spin spinning={isLoading}>
			<PageHeader title='Batalha' />

			<div className='container py-4'>
				<div className='row g-3 justify-center' ref={parent}>
					{data?.map((room) => (
						<div className='col-6 col-md-4 col-lg-3' key={room.id}>
							<RoomCard room={room} deleteRoom={handleDeleteRoom(room.id)} />
						</div>
					))}
				</div>
			</div>

			<div className='text-center'>
				<Button type='primary' onClick={handleCreateRoom} size='large'>
					CRIAR SALA
				</Button>
			</div>
		</Spin>
	);
};
