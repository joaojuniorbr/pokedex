import { useQuery } from '@tanstack/react-query';
import { api } from '@common';
import { Pokemon } from '@types';

export const usePokemon = (name: string) => {
	return useQuery<Pokemon>({
		queryKey: ['pokemon', name],
		queryFn: () => {
			if (name) {
				return api.get(`/pokemon/${name}`).then((res) => res.data);
			}

			return Promise.resolve(null);
		},
		staleTime: Infinity,
	});
};
