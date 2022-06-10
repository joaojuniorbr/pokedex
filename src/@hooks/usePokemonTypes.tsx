import { useQuery } from 'react-query';

import { getPokemonIdByUrl } from 'src/@common/helpers';

import { Api, QUERY_DATA } from 'src/@services';

interface IItem {
	pokemon: {
		name: string;
		url: string;
	};
}

export const usePokemonTypes = (typeId: string) => {
	const { data: results, isFetching } = useQuery<
		Array<{
			name: string;
			url: string;
		}>
	>(
		[QUERY_DATA.TYPES_POKEMON, typeId],
		async () => {
			const response = await Api.get(`type/${typeId}`);

			let data = [];

			if (response.data.pokemon) {
				data = response.data.pokemon
					.filter((item: IItem) => getPokemonIdByUrl(item.pokemon.url) < 1000)
					.map((item: IItem) => item.pokemon);
			}

			return data;
		},
		{
			staleTime: 100000,
		}
	);

	return {
		results: results,
		isFetching,
	};
};
