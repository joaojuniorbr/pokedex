import { Species } from '@types';

const formatPokemonNumber = (id: number): string =>
	`#${id.toString().padStart(3, '0')}`;

const formatPokemonName = (name: string): string =>
	name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

const getFlavorText = (species_data: Species) => {
	const portuguese_entry = species_data.flavor_text_entries.find(
		(entry) => entry.language.name === 'pt-BR'
	);

	const english_entry = species_data.flavor_text_entries.find(
		(entry) => entry.language.name === 'en'
	);

	if (portuguese_entry) {
		return portuguese_entry.flavor_text;
	}

	if (english_entry) {
		return english_entry.flavor_text;
	}

	return 'Texto não disponível';
};

export { formatPokemonName, formatPokemonNumber, getFlavorText };
