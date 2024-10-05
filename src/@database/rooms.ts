import { message } from 'antd';
import { database } from './database';
import { RoomInterface } from '@types';

class Rooms {
	userId: string;

	constructor(userId: string) {
		this.userId = userId;
	}

	async createRoom(): Promise<RoomInterface | null> {
		const { data, error } = await database
			.from('rooms')
			.insert([{ creator_id: this.userId }])
			.single();

		if (error) {
			message.error('Erro ao criar sala:');
			return null;
		} else {
			message.success('Sala criada com sucesso!');
			return data;
		}
	}

	async joinRoom(roomId: string): Promise<RoomInterface | null> {
		const { data: room, error } = await database
			.from('rooms')
			.select('*')
			.eq('id', roomId)
			.single();

		if (error) {
			message.error('Erro ao encontrar a sala.');
			return null;
		}

		if (room.creator_id && room.opponent_id) {
			message.warning(
				'A sala já está cheia! Apenas dois jogadores são permitidos.'
			);
			return null;
		}

		const { error: joinError } = await database
			.from('rooms')
			.update({ opponent_id: this.userId })
			.eq('id', roomId);

		if (joinError) {
			message.error('Erro ao entrar na sala:');
			return null;
		} else {
			message.success('Entrou na sala com sucesso!');
			return room;
		}
	}

	static async getRoom(roomId: string): Promise<RoomInterface | null> {
		const { data: room, error } = await database
			.from('rooms')
			.select('*')
			.eq('id', roomId)
			.single();

		if (error) {
			message.error('Erro ao encontrar a sala.');
			return null;
		}

		return room;
	}

	static async leaveRoom(roomId: string): Promise<RoomInterface | null> {
		const { data: room, error } = await database
			.from('rooms')
			.update({ opponent_id: null })
			.eq('id', roomId)
			.single();

		if (error) {
			message.error('Erro ao sair da sala:');
			return null;
		} else {
			message.success('Saiu da sala com sucesso!');
			return room;
		}
	}

	static async deleteRoom(roomId: string): Promise<RoomInterface | null> {
		const { data: room, error } = await database
			.from('rooms')
			.delete()
			.eq('id', roomId)
			.single();

		if (error) {
			message.error('Erro ao deletar a sala:');
			return null;
		} else {
			message.success('Sala deletada com sucesso!');
			return room;
		}
	}

	static async getRooms(): Promise<RoomInterface[] | null> {
		const { data, error } = await database
			.from('rooms')
			.select('*')
			.is('opponent_id', null);

		if (error) {
			message.error('Erro ao encontrar as salas:');
			return null;
		} else {
			return data;
		}
	}
}

export default Rooms;
