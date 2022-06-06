import { QueryClient as ReactQueryClient } from 'react-query';

export const QUERY_DATA = {
	TYPES: 'types',
	TYPES_POKEMON: 'pokemonByTypes',
	POKEMON: 'pokemon',
};

export const QueryClient = new ReactQueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});
