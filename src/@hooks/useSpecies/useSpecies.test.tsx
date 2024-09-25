import { MockSpecies } from 'mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { api } from '@common';
import { describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useSpecies } from './useSpecies';

vi.mock('@common/api');

const queryClient = new QueryClient();

const mockApi = vi.mocked(api.get);

describe('useSpecies', () => {
	it('should fetch species data', async () => {
		mockApi.mockResolvedValueOnce({ data: MockSpecies });

		const { result } = renderHook(() => useSpecies('pikachu'), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(result.current.data).toEqual(MockSpecies);
		expect(api.get).toHaveBeenCalledWith('/pokemon-species/pikachu');
	});
});
