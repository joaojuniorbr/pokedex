import { usePokemon } from '@hooks';
import { api } from '@common';
import { describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { mockPokemon } from 'mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('@common/api');

const queryClient = new QueryClient();

const mockApi = vi.mocked(api.get);

describe('usePokemon', () => {
	it('should fetch pokemon data', async () => {
		mockApi.mockResolvedValueOnce({ data: mockPokemon });

		const { result } = renderHook(() => usePokemon('pikachu'), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(result.current.data).toEqual(mockPokemon);
		expect(api.get).toHaveBeenCalledWith('/pokemon/pikachu');
	});
});
