import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { api } from '@common';
import axios from 'axios';
import { useEvolution } from './useEvolution';

vi.mock('@common', () => ({
	api: {
		get: vi.fn(),
	},
}));
vi.mock('axios');

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useEvolution', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should fetch the evolution chain successfully', async () => {
		const mockApi = vi.mocked(api.get);
		const mockAxios = vi.mocked(axios.get);

		mockApi.mockResolvedValueOnce({
			data: {
				evolution_chain: {
					url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
				},
			},
		});

		mockAxios.mockResolvedValueOnce({
			data: {
				chain: {
					species: {
						name: 'bulbasaur',
						url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
					},
					evolves_to: [
						{
							species: {
								name: 'ivysaur',
								url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
							},
							evolves_to: [
								{
									species: {
										name: 'venusaur',
										url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
									},
									evolves_to: [],
								},
							],
						},
					],
				},
			},
		});

		const { result } = renderHook(() => useEvolution('1'), { wrapper });

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(api.get).toHaveBeenCalledWith('/pokemon-species/1');
		expect(axios.get).toHaveBeenCalledWith(
			'https://pokeapi.co/api/v2/evolution-chain/1/'
		);

		expect(result.current.data?.[0]).toEqual({
			species_name: 'bulbasaur',
			species_id: 1,
			evolves_to: [
				{
					species_name: 'ivysaur',
					species_id: 2,
					evolves_to: [
						{
							species_name: 'venusaur',
							species_id: 3,
							evolves_to: [],
						},
					],
				},
			],
		});
	});
});
