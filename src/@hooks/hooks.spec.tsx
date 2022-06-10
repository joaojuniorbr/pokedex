import { act, renderHook, waitFor } from '@testing-library/react';

import { Api } from 'src/@services';

import { Providers } from 'src/@test';

import pokeapi from 'src/@test/__mocks__/pokeapi';

import { usePokemon, useTypes, usePokemonTypes } from './';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(Api, { delayResponse: 10 });

describe('Hooks', () => {
	test('Retorna os dados do Pokemon', async () => {
		mock.onGet('/pokemon/16').replyOnce(200, pokeapi.pokemon);

		const { result } = renderHook(() => usePokemon('16'), {
			wrapper: Providers,
		});

		await waitFor(() => {
			expect(result.current.results?.name).toBe(pokeapi.pokemon.name);
		});
	});

	test('Erro na API da chamada Pokemon', async () => {
		mock.onGet('/pokemon/15').replyOnce(400, {});

		const { result } = renderHook(() => usePokemon('15'), {
			wrapper: Providers,
		});

		await act(() => {
			expect(result.current.results).toBe(undefined);
		});
	});

	test('Retorna todos os tipos de pokemon', async () => {
		mock.onGet('type').reply(200, {
			results: pokeapi.types,
		});

		const { result } = renderHook(() => useTypes(), {
			wrapper: Providers,
		});

		mock.restore();

		await waitFor(() => {
			expect(result.current.results).toHaveLength(20);
		});
	});

	test('Retorna os pokemon por tipos', async () => {
		mock
			.onGet('/type/fighting')
			.replyOnce(200, { pokemon: pokeapi.typePokemon });

		const { result } = renderHook(() => usePokemonTypes('fighting'), {
			wrapper: Providers,
		});

		await waitFor(() => {
			expect(result.current.results).toHaveLength(61);
		});
	});
});
