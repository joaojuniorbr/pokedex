export interface RoomInterface {
	id: string;
	creator_id?: string;
	opponent_id?: string;
	creator_at: string;
	opponent_email?: string;
	creator_email?: string;

	opponent_choice?: string;
	creator_choice?: string;

	opponent_ready?: boolean;
	creator_ready?: boolean;

	status?: string;
}
