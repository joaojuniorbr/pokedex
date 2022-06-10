import { useQuery } from 'react-query';

import { Api, QUERY_DATA } from 'src/@services';

export const useTypes = () => {
	const { data: results, isFetching } = useQuery<
		Array<{
			name: string;
			url: string;
		}>
	>(
		[QUERY_DATA.TYPES],
		async () => {
			const response = await Api.get('type', {
				params: {
					limit: 100,
				},
			});

			return response.data.results;
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
