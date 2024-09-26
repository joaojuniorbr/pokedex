import { render, screen } from '@testing-library/react';
import { PokemonWeaknesses } from './PokemonWeaknesses';
import { useWeaknesses } from '@hooks';
import { describe, it, vi, Mock, expect } from 'vitest';

vi.mock('@hooks', () => ({
	useWeaknesses: vi.fn(),
}));

describe('PokemonWeaknesses', () => {
	it('should render weaknesses when data is available', () => {
		const mockWeaknesses = [
			{ name: 'fire', url: 'https://example.com/fire' },
			{ name: 'water', url: 'https://example.com/water' },
		];
		(useWeaknesses as Mock).mockReturnValue({ data: mockWeaknesses });

		render(
			<PokemonWeaknesses
				pokemonId='picachu'
				types={[
					{ slot: 1, type: { url: '', name: 'grass' } },
					{ slot: 2, type: { url: '', name: 'poison' } },
				]}
			/>
		);

		expect(screen.getByText('Fogo')).toBeInTheDocument();
		expect(screen.getByText('Água')).toBeInTheDocument();
	});

	it('should not render anything if there is no weakness data', () => {
		(useWeaknesses as Mock).mockReturnValue({ data: null });

		const { container } = render(
			<PokemonWeaknesses
				pokemonId='pikachu'
				types={[
					{ slot: 1, type: { url: '', name: 'fire' } },
					{ slot: 2, type: { url: '', name: 'water' } },
				]}
			/>
		);

		expect(container).toBeEmptyDOMElement();
	});
});
