import { api } from '@common/api';
import { useQuery } from '@tanstack/react-query';

interface DefaulInterface {
	name: string;
	url: string;
}

interface TypeResponse {
	damage_relations: {
		double_damage_from: DefaulInterface[];
		double_damage_to: DefaulInterface[];
		half_damage_from: DefaulInterface[];
		half_damage_to: DefaulInterface[];
		no_damage_from: DefaulInterface[];
		no_damage_to: DefaulInterface[];
	};
}

export const useWeaknesses = (pokemonId: string, types: string[]) =>
	useQuery({
		queryKey: [pokemonId, types],
		queryFn: async () => {
			const data: DefaulInterface[] = [];

			await Promise.all(
				types.map(async (type) => {
					const dataResponse = await api
						.get<TypeResponse>(`/type/${type}`)
						.then((res) => res.data);

					dataResponse.damage_relations.double_damage_from.forEach((value) =>
						data.push(value)
					);
				})
			);

			return data;
		},
		staleTime: Infinity,
	});
