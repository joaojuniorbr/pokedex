import { render, screen, fireEvent } from '@testing-library/react';
import { FavoritesPage } from './FavoritesPage';
import { useFavorites } from '@hooks/useFavorites';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { usePokemon } from '@hooks/usePokemon';
import { mockPokemon } from 'mocks';

vi.mock('@hooks/useFavorites');
vi.mock('@hooks/usePokemon');

(usePokemon as Mock).mockReturnValue({ data: mockPokemon });

describe('FavoritesPage', () => {
	const mockUseFavorites = useFavorites as Mock;

	beforeEach(() => {
		mockUseFavorites.mockReturnValue({
			data: [{ pokemon_id: 'bulbasaur' }],
			removeFavorite: vi.fn(),
		});
	});

	it('renders the favorite Pokémon', () => {
		render(
			<MemoryRouter>
				<FavoritesPage />
			</MemoryRouter>
		);

		expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
	});

	it('removes a Pokémon from favorites when the button is clicked', () => {
		const { removeFavorite } = mockUseFavorites();

		render(
			<MemoryRouter>
				<FavoritesPage />
			</MemoryRouter>
		);

		const removeButton = screen.getAllByText('Remover')[0];
		fireEvent.click(removeButton);

		expect(removeFavorite).toHaveBeenCalledWith('bulbasaur');
	});
});
