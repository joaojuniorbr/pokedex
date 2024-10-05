import { Image, Spin, Tooltip } from 'antd';

import { formatPokemonName, formatPokemonNumber } from '@common';
import { useFavorites, usePokemon } from '@hooks';
import { TypeNames } from '@assets/types';

import { Link } from 'react-router-dom';
import { IconType } from '@compoents/atoms';
import { useCallback } from 'react';

interface PokemonItemListProps {
	name: string;
}

export const PokemonItemList = ({ name }: PokemonItemListProps) => {
	const { data } = usePokemon(name);

	const { addFavorite, isPokemonFavorited, removeFavorite } = useFavorites();

	const idPokemon = data?.id.toString() as string;

	const handleAddFavorite = useCallback(() => {
		if (isPokemonFavorited(idPokemon)) {
			removeFavorite(idPokemon);
		} else {
			addFavorite(idPokemon);
		}
	}, [addFavorite, removeFavorite, idPokemon, isPokemonFavorited]);

	if (!data) {
		return null;
	}

	const styleFavorite = isPokemonFavorited(idPokemon)
		? 'bg-red-500 text-white'
		: 'text-red-500';

	const iconFavorite = isPokemonFavorited(idPokemon)
		? 'ri-heart-fill'
		: 'ri-heart-line';

	return (
		<div className='border-slate-300 border rounded-md bg-gradient-to-b from-slate-100 to-white relative shadow-md transition-all hover:translate-y-[-5px]'>
			<span className='absolute top-2 left-2 text-xs font-bold block text-slate-400'>
				{formatPokemonNumber(parseInt(idPokemon))}
			</span>
			<button
				className={`${styleFavorite} absolute top-2 right-2 border border-red-500 flex h-8 w-8 text-lg items-center justify-center rounded-full p-0 z-10`}
				onClick={handleAddFavorite}
				data-testid='favorite-button'
			>
				<i className={iconFavorite}></i>
			</button>
			<Link to={`/pokemon/${name}`}>
				<figure className='p-3 w-full aspect-square flex justify-center items-center'>
					<Image
						src={data?.sprites.other?.['official-artwork'].front_default}
						alt={name}
						loading='lazy'
						placeholder={<Spin spinning size='large' />}
						fallback='/pokeball-red.svg'
						preview={false}
					/>
				</figure>
			</Link>
			<h3 className='text-center m-0 py-3 px-2 font-semibold border-t border-slate-300 truncate'>
				{formatPokemonName(data?.name)}
			</h3>
			<div className='py-3 border-t border-slate-300 flex w-full justify-center'>
				{data.types.map((type) => (
					<div className='mx-1' key={type.slot}>
						<Tooltip
							title={TypeNames[type.type.name as keyof typeof TypeNames]}
						>
							<div className={`w-8 p-2 rounded-full bg-${type.type.name}`}>
								<IconType name={type.type.name} />
							</div>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	);
};
