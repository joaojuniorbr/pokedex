import { useEffect, useRef } from 'react';
import { Button, Spin, Typography } from 'antd';
import autoAnimate from '@formkit/auto-animate';

import { PageHeader } from '@compoents/atoms';
import { PokemonCard } from '@compoents/molecules';
import { useFavorites } from '@hooks';

export const FavoritesPage = () => {
	const { data, removeFavorite, isLoading } = useFavorites();

	const parent = useRef(null);

	const handleRemoveFavorite = (pokemonId: string) => () => {
		removeFavorite(pokemonId);
	};

	useEffect(() => {
		if (parent.current) {
			autoAnimate(parent.current);
		}
	}, [parent]);

	return (
		<Spin spinning={isLoading} size='large'>
			<PageHeader title='Favoritos' />

			<div className='container py-3'>
				{Boolean(!data?.length && !isLoading) && (
					<div className='text-center p-10'>
						<img
							src='/error-404.png'
							alt='404'
							className='mx-auto mb-5 block'
						/>
						<Typography.Title level={3} className='uppercase mb-4'>
							Nenhum pokemon adicionado
						</Typography.Title>

						<Button href='/' type='primary' size='large'>
							ADICIONAR
						</Button>
					</div>
				)}

				{Boolean(data?.length) && (
					<div className='row g-3' ref={parent}>
						{data?.map((item) => (
							<div
								className='col-6 col-md-4 col-lg-3 col-xl-2'
								key={item.pokemon_id}
							>
								<PokemonCard pokemonId={item.pokemon_id} />
								<Button
									danger
									block
									onClick={handleRemoveFavorite(item.pokemon_id)}
									className='mt-2'
								>
									Remover
								</Button>
							</div>
						))}
					</div>
				)}
			</div>
		</Spin>
	);
};
