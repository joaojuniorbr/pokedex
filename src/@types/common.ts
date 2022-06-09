export type TTypes =
	| 'bug'
	| 'dark'
	| 'dragon'
	| 'electric'
	| 'fairy'
	| 'fighting'
	| 'fire'
	| 'flying'
	| 'ghost'
	| 'grass'
	| 'ground'
	| 'ice'
	| 'normal'
	| 'poison'
	| 'psychic'
	| 'rock'
	| 'steel'
	| 'water'
	| 'unknown'
	| 'shadow';

export interface IIconHeaderMenu {
	url: string;
	name: string;
	icon: React.ReactNode;
}
