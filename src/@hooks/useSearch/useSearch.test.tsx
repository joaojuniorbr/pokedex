import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { api } from '@common';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useSearch } from './useSearch';

vi.mock('@common');

describe('useSearch', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	const queryClient = () => new QueryClient();

	it('should fetch all pokemons when no type is provided', async () => {
		const mockApi = vi.mocked(api.get);

		const mockPokemons = [
			{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
			{ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
		];

		mockApi.mockResolvedValueOnce({
			data: {
				results: mockPokemons,
			},
		});

		const { result } = renderHook(() => useSearch(), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient()}>
					{children}
				</QueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(api.get).toHaveBeenCalledWith('/pokemon?limit=1500');
		expect(result.current.data).toEqual(mockPokemons);
	});

	it('should fetch pokemons by type when a type is provided', async () => {
		const mockApi = vi.mocked(api.get);

		const mockPokemonsByType = [
			{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
			{ name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/' },
		];

		mockApi.mockResolvedValueOnce({
			data: {
				pokemon: mockPokemonsByType.map((p) => ({ pokemon: p })),
			},
		});

		const { result } = renderHook(() => useSearch('electric'), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient()}>
					{children}
				</QueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(api.get).toHaveBeenCalledWith('/type/electric');
		expect(result.current.data).toEqual(mockPokemonsByType);
	});
});
