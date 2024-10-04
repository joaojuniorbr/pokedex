import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it, vi, Mock, beforeEach } from 'vitest';
import { PokemonItemList } from './PokemonItemList';
import { useFavorites, usePokemon } from '@hooks';
import { formatPokemonName, formatPokemonNumber } from '@common';
import { mockPokemon } from 'mocks';

vi.mock('@hooks', () => ({
	usePokemon: vi.fn(),
	useFavorites: vi.fn().mockReturnValue({
		addFavorite: vi.fn(),
		isPokemonFavorited: vi.fn().mockReturnValue(true),
	}),
}));

vi.mock('@common', () => ({
	formatPokemonName: vi.fn(),
	formatPokemonNumber: vi.fn(),
}));

describe('PokemonItemList', () => {
	const mockFormatPokemonName = vi.mocked(formatPokemonName);
	const mockFormatPokemonNumber = vi.mocked(formatPokemonNumber);

	beforeEach(() => vi.clearAllMocks);

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
		(useFavorites as Mock).mockReturnValue({
			addFavorite: vi.fn(),
			isPokemonFavorited: vi.fn().mockReturnValue(false),
		});

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

	it('should click to favorite', () => {
		const addFavoriteAction = vi.fn();
		const removeFavoriteAction = vi.fn();
		const isPokemonFavorited = vi.fn().mockReturnValue(true);

		(usePokemon as Mock).mockReturnValue({ data: mockPokemon });
		(useFavorites as Mock).mockReturnValue({
			data: [],
			addFavorite: addFavoriteAction,
			removeFavorite: removeFavoriteAction,
			isPokemonFavorited,
		});

		mockFormatPokemonName.mockReturnValue('Bulbasaur');
		mockFormatPokemonNumber.mockReturnValue('#001');

		render(
			<Router>
				<PokemonItemList name='bulbasaur' />
			</Router>
		);

		const favoriteButton = screen.getByTestId('favorite-button');
		fireEvent.click(favoriteButton);

		expect(removeFavoriteAction).toHaveBeenCalledTimes(1);

		isPokemonFavorited.mockReturnValue(false);

		fireEvent.click(favoriteButton);

		expect(addFavoriteAction).toHaveBeenCalledTimes(1);
	});
});
