import { useFavorites } from './useFavorites';
import { useAuth0 } from '@auth0/auth0-react';
import Favorites from '@database/favorites';
import { act, renderHook, waitFor } from '@testing-library/react';
import { message } from 'antd';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

vi.mock('@auth0/auth0-react');
vi.mock('@database/favorites');
vi.mock('antd', () => ({
	message: {
		success: vi.fn(),
	},
}));

describe('useFavorites', () => {
	const mockUser = {
		sub: 'user123',
	};

	const mockFavorites = {
		getFavorites: vi.fn(),
		addFavorite: vi.fn(),
		removeFavorite: vi.fn(),
	};

	beforeEach(() => {
		vi.clearAllMocks();
		(useAuth0 as Mock).mockReturnValue({ user: mockUser });
		(Favorites as Mock).mockImplementation(() => mockFavorites);
		mockFavorites.getFavorites.mockResolvedValue([]);
	});

	it('initializes favorites correctly', async () => {
		const { result } = renderHook(() => useFavorites());

		await waitFor(() => {
			expect(result.current.data).toEqual([]);
			expect(mockFavorites.getFavorites).toHaveBeenCalled();
		});
	});

	it('adds a favorite and updates the list', async () => {
		const { result } = renderHook(() => useFavorites());

		await waitFor(() => {
			act(() => {
				result.current.addFavorite('001');
			});

			expect(mockFavorites.addFavorite).toHaveBeenCalledWith('001');
			expect(message.success).toHaveBeenCalledWith(
				'Favorito adicionado com sucesso!'
			);
			expect(mockFavorites.getFavorites).toHaveBeenCalledTimes(2);
		});
	});

	it('removes a favorite and updates the list', async () => {
		const { result } = renderHook(() => useFavorites());

		await waitFor(() => {
			act(() => {
				result.current.removeFavorite('001');
			});

			expect(mockFavorites.removeFavorite).toHaveBeenCalledWith('001');
			expect(message.success).toHaveBeenCalledWith(
				'Favorito removido com sucesso!'
			);
			expect(mockFavorites.getFavorites).toHaveBeenCalledTimes(2);
		});
	});

	it('checks if a Pokemon is favorited', async () => {
		mockFavorites.getFavorites.mockResolvedValue([{ pokemon_id: '001' }]);
		const { result } = renderHook(() => useFavorites());

		await waitFor(() => {
			expect(result.current.isPokemonFavorited('001')).toBe(true);
			expect(result.current.isPokemonFavorited('002')).toBe(false);
		});
	});
});
