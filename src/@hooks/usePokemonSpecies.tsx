import { useQuery } from 'react-query';

import { ISpecies } from 'src/@types/pokemon';

import { Api, QUERY_DATA } from 'src/@services';

export const usePokemonSpecies = (pokemonId: string) => {
	const { data: results, isFetching } = useQuery<ISpecies>(
		[QUERY_DATA.POKEMON, pokemonId],
		async () => {
			try {
				const response = await Api.get(`pokemon-species/${pokemonId}`);

				return response.data;
			} catch (error) {
				return null;
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
