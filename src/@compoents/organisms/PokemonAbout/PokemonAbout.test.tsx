import { render, screen } from '@testing-library/react';
import { PokemonAbout } from './PokemonAbout';
import { describe, expect, it, vi, Mock, beforeEach } from 'vitest';
import { mockPokemon, MockSpecies } from 'mocks';
import { useSpecies } from '@hooks';

vi.mock('@hooks', () => ({
	useSpecies: vi.fn(),
}));

describe('PokemonAbout', () => {
	beforeEach(() => {
		(useSpecies as Mock).mockReturnValue({
			data: MockSpecies,
		});
	});

	it('should render species flavor text and Pokemon info', () => {
		render(<PokemonAbout pokemon={mockPokemon} />);

		expect(
			screen.getByText(
				'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.'
			)
		).toBeInTheDocument();
		expect(screen.getByText(/peso/i)).toBeInTheDocument();
		expect(screen.getByText(/altura/i)).toBeInTheDocument();
	});

	it('should not render anything if species data is not available', () => {
		(useSpecies as Mock).mockReturnValue({
			data: null,
		});

		render(<PokemonAbout pokemon={mockPokemon} />);

		expect(
			screen.queryByText(
				'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.'
			)
		).not.toBeInTheDocument();
	});
});
