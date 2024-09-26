import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest';
import { PokemonItemList } from './PokemonItemList';
import { usePokemon } from '@hooks';
import { formatPokemonName, formatPokemonNumber } from '@common';

vi.mock('@hooks', () => ({
	usePokemon: vi.fn(),
}));

vi.mock('@common', () => ({
	formatPokemonName: vi.fn(),
	formatPokemonNumber: vi.fn(),
}));

describe('PokemonItemList', () => {
	const mockFormatPokemonName = vi.mocked(formatPokemonName);
	const mockFormatPokemonNumber = vi.mocked(formatPokemonNumber);

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should return null when no data is available', () => {
		(usePokemon as Mock).mockReturnValue({ data: null });
		const { container } = render(
			<Router>
				<PokemonItemList name='bulbasaur' />
			</Router>
		);

		expect(container.firstChild).toBeNull();
	});

	it('should render PokemonItemList correctly when data is available', async () => {
		const mockPokemonData = {
			id: 1,
			sprites: {
				other: {
					'official-artwork': {
						front_default: 'https://example.com/sprite.png',
					},
				},
			},
			types: [
				{ slot: 1, type: { name: 'grass' } },
				{ slot: 2, type: { name: 'poison' } },
			],
		};

		(usePokemon as Mock).mockReturnValue({ data: mockPokemonData });

		mockFormatPokemonName.mockReturnValue('Bulbasaur');
		mockFormatPokemonNumber.mockReturnValue('#001');

		render(
			<Router>
				<PokemonItemList name='bulbasaur' />
			</Router>
		);

		await waitFor(() => {
			expect(screen.getByText('#001')).toBeInTheDocument();
			expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
			expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
		});

		expect(screen.getByAltText('bulbasaur')).toHaveAttribute(
			'src',
			'https://example.com/sprite.png'
		);
	});
});
