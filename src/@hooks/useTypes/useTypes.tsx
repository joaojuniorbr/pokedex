import { AxiosResponse } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { api } from '@common/api';
interface Type {
	name: string;
	url: string;
}

interface TypeResponse {
	count: number;
	next: string;
	previous: string;
	results: Type[];
}

export const useTypes = () =>
	useQuery<TypeResponse>({
		queryKey: ['types'],
		queryFn: () =>
			api.get('/type').then((res: AxiosResponse<TypeResponse>) => {
				const { results } = res.data;

				return {
					...res.data,
					results: results.filter(
						(item) => item.name !== 'stellar' && item.name !== 'unknown'
					),
				};
			}),
		staleTime: Infinity,
	});
