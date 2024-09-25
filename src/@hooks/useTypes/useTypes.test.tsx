import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useTypes } from './useTypes';
import { api } from '@common/api';
import { MockTypes } from 'mocks';

vi.mock('@common/api');

const createQueryClient = () => new QueryClient();

describe('useTypes', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should fetch and filter out "stellar" and "unknown" types', async () => {
		const mockApi = vi.mocked(api.get);

		const mockTypeResponse = {
			count: 20,
			next: 'next-url',
			previous: null,
			results: MockTypes,
		};

		mockApi.mockResolvedValueOnce({
			data: mockTypeResponse,
		});

		const { result } = renderHook(() => useTypes(), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={createQueryClient()}>
					{children}
				</QueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(api.get).toHaveBeenCalledWith('/type');

		expect(result.current.data).toEqual({
			count: 20,
			next: 'next-url',
			previous: null,
			results: [
				{ name: 'fire', url: '/type/fire' },
				{ name: 'water', url: '/type/water' },
				{ name: 'electric', url: '/type/electric' },
			],
		});
	});
});
