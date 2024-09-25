import { useQuery } from '@tanstack/react-query';
import { api } from '@common';

interface PokemonResult {
	name: string;
	url: string;
}

const getAllPokemons = () =>
	api.get('/pokemon?limit=1500').then((res) => res.data.results);

const getPokemonsByType = (type: string) =>
	api.get(`/type/${type}`).then((res) =>
		res.data.pokemon.map(
			(item: {
				pokemon: {
					name: string;
					url: string;
				};
			}) => item.pokemon
		)
	);

export const useSearch = (type?: string) => {
	return useQuery<PokemonResult[]>({
		queryKey: ['porkemon-list'],
		queryFn: () => (type ? getPokemonsByType(type) : getAllPokemons()),
		staleTime: Infinity,
	});
};
