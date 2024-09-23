import { Species } from '@types';

const formatPokemonNumber = (id: number): string =>
	`#${id.toString().padStart(3, '0')}`;

const formatPokemonName = (name: string): string =>
	name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

const getFlavorText = (speciesData: Species) => {
	const portugueseEntry = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === 'pt-BR'
	);

	const englishEntry = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === 'en'
	);

	return portugueseEntry
		? portugueseEntry.flavor_text
		: englishEntry
		? englishEntry.flavor_text
		: 'Texto não disponível';
};

export { formatPokemonName, formatPokemonNumber, getFlavorText };
