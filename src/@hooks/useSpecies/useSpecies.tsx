import { api } from '@common/api';
import { useQuery } from '@tanstack/react-query';
import { Species } from '@types';

export const useSpecies = (name: string) => {
	return useQuery<Species | null>({
		queryKey: ['species', name],
		queryFn: () =>
			api.get<Species>(`/pokemon-species/${name}`).then((res) => res.data),
		staleTime: Infinity,
	});
};
