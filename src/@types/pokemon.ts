export interface IPokemon {
	abilities: Array<{
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}>;
	base_experience: number;
	height: number;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	name: string;
	order: number;
	species: {
		name: string;
		url: string;
	};
	stats: Array<{
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}>;
	types: Array<{
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}>;
	weight: number;
}
