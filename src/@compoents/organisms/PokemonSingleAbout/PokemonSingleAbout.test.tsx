import { render, screen } from '@testing-library/react';
import { PokemonSingleAbout } from './PokemonSingleAbout';
import { useSpecies } from '@hooks';
import { getFlavorText } from '@common/helper';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockPokemon } from 'mocks';

vi.mock('@hooks', () => ({
	useSpecies: vi.fn(),
}));

vi.mock('@common/helper', () => ({
	getFlavorText: vi.fn(),
}));

describe('PokemonSingleAbout', () => {
	const mockSpeciesData = {
		flavor_text_entries: [
			{
				flavor_text: 'Pikachu is an Electric-type Pokémon.',
				language: { name: 'en' },
			},
		],
	};

	beforeEach(() => {
		useSpecies.mockReturnValue({ data: mockSpeciesData });
		getFlavorText.mockReturnValue('Pikachu is an Electric-type Pokémon.');
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render species flavor text and Pokemon info', () => {
		render(<PokemonSingleAbout pokemon={mockPokemon} />);

		expect(
			screen.getByText('Pikachu is an Electric-type Pokémon.')
		).toBeInTheDocument();

		expect(screen.getByText(/peso/i)).toBeInTheDocument();
		expect(screen.getByText(/altura/i)).toBeInTheDocument();
	});

	it('should not render anything if species data is not available', () => {
		(useSpecies as vi.Mock).mockReturnValue({ data: null });

		const { container } = render(<PokemonSingleAbout pokemon={mockPokemon} />);
		expect(container).toBeEmptyDOMElement();
	});
});
