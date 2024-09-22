const formatPokemonNumber = (id: number): string =>
	`#${id.toString().padStart(3, '0')}`;

const formatPokemonName = (name: string): string =>
	name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

export { formatPokemonName, formatPokemonNumber };
