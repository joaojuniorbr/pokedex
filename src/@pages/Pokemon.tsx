import { useParams } from 'react-router-dom';

import { usePokemon } from '@hooks';
import { PokemonHeader } from '@compoents/atoms';
import { formatPokemonNumber } from '@common/helper';
import { Empty, Image, Spin, Tabs } from 'antd';
import { TypeNames } from '@assets/types';
import {
	PokemonTypes,
	PokemonStats,
	PokemonWeaknesses,
} from '@compoents/molecules';
import { PokemonAbout } from '@compoents/organisms';

export const PokemonPage = () => {
	const { idPokemon } = useParams();

	const { data: pokemon, isLoading } = usePokemon(idPokemon as string);

	if (!pokemon) {
		return <Empty />;
	}

	const mainType = pokemon.types[0].type.name as TypeNames;

	const imageUrl = (id: number) =>
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

	return (
		<Spin spinning={isLoading}>
			<PokemonHeader
				name={pokemon.name}
				type={mainType}
				id={formatPokemonNumber(pokemon.id)}
			/>

			<section
				className={`text-center bg-gradient-to-t from-white to-${mainType}`}
			>
				<div className='container'>
					<Image
						alt={pokemon.name}
						src={imageUrl(pokemon.id)}
						placeholder={<Spin spinning size='large' />}
						preview={false}
					/>
				</div>
			</section>

			<section className='pt-3 mb-4'>
				<div className='container'>
					<PokemonTypes types={pokemon.types} />
				</div>
			</section>

			<section className='pb-10'>
				<Tabs
					centered
					items={[
						{
							label: 'Sobre',
							key: 'about',
							children: <PokemonAbout pokemon={pokemon} />,
						},
						{
							label: 'Estatísticas',
							key: 'stats',
							children: (
								<div className='container'>
									<div className='row justify-center'>
										<div className='col-md-6'>
											<PokemonStats stats={pokemon.stats} type={mainType} />
										</div>
									</div>
								</div>
							),
						},
						{
							label: 'Fraquezas',
							key: 'weaknesses',
							children: (
								<PokemonWeaknesses
									pokemonId={pokemon.name}
									types={pokemon.types}
								/>
							),
						},
					]}
				/>
			</section>
		</Spin>
	);
};
