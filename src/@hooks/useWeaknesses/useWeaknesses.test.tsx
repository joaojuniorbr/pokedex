import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useWeaknesses } from './useWeaknesses';
import { api } from '@common/api';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@common/api');

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useWeaknesses', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should fetch weaknesses for given types', async () => {
		const mockTypes = ['fire', 'water'];

		const mockApi = vi.mocked(api.get);

		const mockTypeResponseFire = {
			damage_relations: {
				double_damage_from: [{ name: 'rock', url: 'https://example.com/rock' }],
				double_damage_to: [],
				half_damage_from: [{ name: 'grass', url: 'https://example.com/grass' }],
				half_damage_to: [],
				no_damage_from: [],
				no_damage_to: [],
			},
		};

		const mockTypeResponseWater = {
			damage_relations: {
				double_damage_from: [
					{ name: 'electric', url: 'https://example.com/electric' },
				],
				double_damage_to: [],
				half_damage_from: [{ name: 'fire', url: 'https://example.com/fire' }],
				half_damage_to: [],
				no_damage_from: [],
				no_damage_to: [],
			},
		};

		mockApi.mockResolvedValueOnce({ data: mockTypeResponseFire });
		mockApi.mockResolvedValueOnce({ data: mockTypeResponseWater });

		const { result } = renderHook(() => useWeaknesses('1', mockTypes), {
			wrapper,
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(api.get).toHaveBeenCalledWith('/type/fire');
		expect(api.get).toHaveBeenCalledWith('/type/water');

		expect(result.current.data).toEqual([
			{ name: 'grass', url: 'https://example.com/grass' },
			{ name: 'rock', url: 'https://example.com/rock' },
			{ name: 'fire', url: 'https://example.com/fire' },
			{ name: 'electric', url: 'https://example.com/electric' },
		]);
	});

	it('should return an empty array when no types are provided', async () => {
		const { result } = renderHook(() => useWeaknesses('1', []), {
			wrapper,
		});

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
		});

		expect(result.current.data).toEqual([]);
	});
});
