import { RoomInterface } from '@types';
import { Badge, Button } from 'antd';
import moment from 'moment';
import { useCallback } from 'react';

interface RoomCardProps {
	room: RoomInterface;
	deleteRoom: (roomId: string) => void;
}

export const RoomCard = (props: RoomCardProps) => {
	const handleDeleteRoom = useCallback(
		(roomId: string) => () => props.deleteRoom(roomId),
		[props]
	);

	return (
		<div className='bg-slate-50 py-3 px-4 rounded-md border border-slate-300 shadow-md'>
			<Badge
				status='processing'
				text={`Sala aberta em ${moment(props.room.created_at).format(
					'DD/MM/YYYY'
				)}`}
			/>
			<div className='mt-4 row'>
				<div className='col'>
					<Button type='primary' icon={<i className='ri-trophy-line' />}>
						ENTRAR
					</Button>
				</div>
				<div className='col-auto'>
					<Button
						danger
						icon={<i className='ri-delete-bin-line' />}
						title='Excluir'
						onClick={handleDeleteRoom(props.room.id)}
					/>
				</div>
			</div>
		</div>
	);
};
