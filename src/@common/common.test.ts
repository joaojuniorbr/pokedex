import { describe, it, expect } from 'vitest';
import {
	formatPokemonName,
	formatPokemonNumber,
	getFlavorText,
} from './helper';
import { Species } from '@types';
import { api } from './api';
import { colors } from './color';

const mockSpeciesData = {
	flavor_text_entries: [
		{ flavor_text: 'Texto em português', language: { name: 'pt-BR' } },
		{ flavor_text: 'Text in English', language: { name: 'en' } },
	],
} as Species;

describe('Helpers', () => {
	it('should format the Pokemon number with leading zeros', () => {
		expect(formatPokemonNumber(1)).toBe('#001');
		expect(formatPokemonNumber(10)).toBe('#010');
		expect(formatPokemonNumber(100)).toBe('#100');
		expect(formatPokemonNumber(999)).toBe('#999');
	});

	it('should capitalize each word in the Pokemon name', () => {
		expect(formatPokemonName('charmander')).toBe('Charmander');
		expect(formatPokemonName('bulbasaur')).toBe('Bulbasaur');
		expect(formatPokemonName('pikachu')).toBe('Pikachu');
		expect(formatPokemonName('fire-type')).toBe('Fire Type');
		expect(formatPokemonName('water-type')).toBe('Water Type');
	});
});

describe('getFlavorText', () => {
	it('should return the Portuguese flavor text if available', () => {
		expect(getFlavorText(mockSpeciesData)).toBe('Texto em português');
	});

	it('should return the English flavor text if Portuguese is not available', () => {
		const speciesWithoutPortuguese = {
			flavor_text_entries: [
				{ flavor_text: 'Text in English', language: { name: 'en' } },
			],
		};
		expect(getFlavorText(speciesWithoutPortuguese as Species)).toBe(
			'Text in English'
		);
	});

	it('should return "Texto não disponível" if no flavor text is available', () => {
		const speciesWithoutEntries = {
			flavor_text_entries: [
				{
					flavor_text: '',
					language: { name: '' },
				},
			],
		};
		expect(getFlavorText(speciesWithoutEntries as Species)).toBe(
			'Texto não disponível'
		);
	});
});

describe('API Module', () => {
	it('should have the correct baseURL', () => {
		expect(api.defaults.baseURL).toBe('https://pokeapi.co/api/v2');
	});
});

describe('Colors', () => {
	it('should have correct color values for all Pokémon types', () => {
		const expectedColors = {
			bug: '#a7b723',
			dark: '#75574c',
			dragon: '#7037ff',
			electric: '#f9cf30',
			fairy: '#e69eac',
			fighting: '#c12239',
			fire: '#f57d31',
			flying: '#a891ec',
			ghost: '#70559b',
			grass: '#74cb48',
			ground: '#dec16b',
			ice: '#9ad6df',
			normal: '#aaa67f',
			poison: '#a43e9e',
			psychic: '#fb5584',
			rock: '#b69e31',
			steel: '#b7b9d0',
			water: '#6493eb',
		};

		Object.keys(expectedColors).forEach((type) => {
			expect(colors[type as keyof typeof colors]).toBe(
				expectedColors[type as keyof typeof expectedColors]
			);
		});
	});

	it('should contain all Pokémon types', () => {
		const types = [
			'bug',
			'dark',
			'dragon',
			'electric',
			'fairy',
			'fighting',
			'fire',
			'flying',
			'ghost',
			'grass',
			'ground',
			'ice',
			'normal',
			'poison',
			'psychic',
			'rock',
			'steel',
			'water',
		];

		types.forEach((type) => {
			expect(colors).toHaveProperty(type);
		});
	});
});
