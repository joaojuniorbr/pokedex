import { useCallback } from 'react';
import { Badge, Button, Typography } from 'antd';
import dayjs from 'dayjs';

import { RoomInterface } from '@types';

interface RoomCardProps {
	userId?: string;
	room: RoomInterface;
	deleteRoom: (roomId: string) => void;
}

export const RoomCard = (props: RoomCardProps) => {
	const handleDeleteRoom = useCallback(
		(roomId: string) => () => props.deleteRoom(roomId),
		[props]
	);

	const isCanDelete =
		props.userId === props.room.creator_id ||
		props.userId === props.room.opponent_id;

	const isCreator = props.userId === props.room.creator_id;

	const isOpponent = props.userId === props.room.opponent_id;

	const isEnable = isCreator || isOpponent || props.room.opponent_id === null;

	return (
		<div className='bg-slate-50 rounded-md border border-slate-300 shadow-sm'>
			<div className='p-3'>
				<Badge
					status={isCreator ? 'success' : 'processing'}
					text={isCreator ? 'Sala criada por você' : 'Sala disponível'}
				/>
			</div>

			<div className='p-3 border-t border-b border-slate-300'>
				<Typography.Title level={5} className='m-0'>
					Sala aberta {dayjs().from(props.room.created_at)}
				</Typography.Title>
			</div>

			<div className='p-3 row align-items-center'>
				{isEnable && (
					<div className='col'>
						<Button
							type='primary'
							icon={<i className='ri-trophy-line' />}
							href={`/batalha/${props.room.id}`}
						>
							ENTRAR
						</Button>
					</div>
				)}
				{isCanDelete && (
					<div className='col-auto'>
						<Button
							danger
							icon={<i className='ri-delete-bin-line' />}
							title='Excluir'
							onClick={handleDeleteRoom(props.room.id)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
