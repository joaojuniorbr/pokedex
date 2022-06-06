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
	handleClick?: () => void;
	name: string;
	icon: React.ReactNode;
}
