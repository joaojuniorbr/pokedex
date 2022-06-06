import { useQuery } from 'react-query';

import { IPokemon } from 'src/@types/pokemon';

import { Api, QUERY_DATA } from 'src/@services';

export const usePokemon = (pokemonId = '') => {
	const { data: results, isFetching } = useQuery<IPokemon>(
		[QUERY_DATA.POKEMON, pokemonId],
		async () => {
			try {
				const response = await Api.get(`pokemon/${pokemonId}`);

				return response.data || null;
			} catch (error) {
				console.log(error);
			}
		},
		{
			staleTime: 100000,
		}
	);

	return {
		results,
		isFetching,
	};
};
