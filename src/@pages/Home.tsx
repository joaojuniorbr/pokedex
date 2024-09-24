import { useCallback, useState } from 'react';

import { Pagination, Spin, Typography } from 'antd';

import { useSearch } from '@hooks';
import { PokemonItemList } from '@compoents/molecules';
import { SearchBar } from '@compoents/organisms';

const ITEMS_PER_PAGE = 12;

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [type, setType] = useState<string>();

	const { data: pokemons, isLoading, refetch } = useSearch(type);

	const filteredPokemons = pokemons?.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const paginatedPokemons = filteredPokemons?.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	const handlePageChange = useCallback((newPage: number) => {
		setCurrentPage(newPage);
	}, []);

	const handleSearch = useCallback((value: string) => {
		setCurrentPage(1);
		setSearchTerm(value);
	}, []);

	const handleFilter = useCallback(
		(value: string) => {
			setCurrentPage(1);
			setType(value);
			setTimeout(() => {
				refetch();
			}, 100);
		},
		[setCurrentPage, setType, refetch]
	);

	return (
		<main>
			<div className='p-3 bg-primary'>
				<div className='container'>
					<SearchBar onSearch={handleSearch} onFilter={handleFilter} />
				</div>
			</div>

			<div className='container'>
				{isLoading ? (
					<div className='p-10'>
						<Spin spinning />
					</div>
				) : (
					<div className='py-3'>
						{paginatedPokemons?.length ? (
							<div className='row g-3'>
								{paginatedPokemons?.map((item) => (
									<div
										className='col-6 col-md-4 col-lg-3 col-xl-2'
										key={`pokemon-${item.name}`}
									>
										<PokemonItemList name={item.name} />
									</div>
								))}
							</div>
						) : (
							<div className='text-center p-10'>
								<img
									src='/error-404.png'
									alt='404'
									className='mx-auto mb-5 block'
								/>
								<Typography.Title level={3} className='uppercase'>
									Nenhum pokemon encontrado
								</Typography.Title>
							</div>
						)}

						<Pagination
							align='center'
							current={currentPage}
							pageSize={ITEMS_PER_PAGE}
							total={filteredPokemons?.length}
							onChange={handlePageChange}
							showSizeChanger={false}
							hideOnSinglePage
							className='mt-5'
						/>
					</div>
				)}
			</div>
		</main>
	);
};
