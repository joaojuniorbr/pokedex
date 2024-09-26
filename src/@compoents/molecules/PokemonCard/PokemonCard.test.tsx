import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi, describe, it, beforeEach, Mock, expect } from 'vitest';
import { PokemonCard } from './PokemonCard';
import { usePokemon } from '@hooks';
import { formatPokemonName } from '@common/helper';

vi.mock('@hooks', () => ({
	usePokemon: vi.fn(),
}));

vi.mock('@common/helper', () => ({
	formatPokemonName: vi.fn(),
}));

describe('PokemonCard', () => {
	const mockFormatPokemonName = vi.mocked(formatPokemonName);

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should render PokemonCard correctly when data is available', async () => {
		const mockPokemonData = {
			name: 'bulbasaur',
			sprites: {
				other: {
					'official-artwork': {
						front_default: 'https://example.com/bulbasaur.png',
					},
				},
			},
			types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
		};

		(usePokemon as Mock).mockReturnValue({ data: mockPokemonData });
		mockFormatPokemonName.mockReturnValue('Bulbasaur');

		render(
			<Router>
				<PokemonCard pokemonId='1' actived={false} />
			</Router>
		);

		await waitFor(() => {
			expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
			expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
		});

		expect(screen.getByAltText('bulbasaur')).toHaveAttribute(
			'src',
			'https://example.com/bulbasaur.png'
		);

		expect(screen.getByRole('link')).toHaveAttribute(
			'href',
			'/pokemon/bulbasaur'
		);
	});

	it('should not render if no data is available', () => {
		(usePokemon as Mock).mockReturnValue({ data: null });

		const { container } = render(
			<Router>
				<PokemonCard pokemonId='1' actived={false} />
			</Router>
		);

		expect(container.firstChild).toBeNull();
	});

	it('should apply the correct styles when actived', async () => {
		const mockPokemonData = {
			name: 'bulbasaur',
			sprites: {
				other: {
					'official-artwork': {
						front_default: 'https://example.com/bulbasaur.png',
					},
				},
			},
			types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
		};

		(usePokemon as Mock).mockReturnValue({ data: mockPokemonData });
		mockFormatPokemonName.mockReturnValue('Bulbasaur');

		render(
			<Router>
				<PokemonCard pokemonId='1' actived={true} />
			</Router>
		);

		await waitFor(() => {
			expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
		});

		const linkElement = screen.getByRole('link');
		expect(linkElement).toHaveClass('pointer-events-none');
	});
});
