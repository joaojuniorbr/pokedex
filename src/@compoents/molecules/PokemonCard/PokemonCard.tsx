import { formatPokemonName } from '@common/helper';
import { usePokemon } from '@hooks';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
	pokemonId: string;
	actived?: boolean;
	onSelected?: (pokeminId: string) => void;
}

export const PokemonCard = ({
	pokemonId,
	actived,
	onSelected,
}: PokemonCardProps) => {
	const { data } = usePokemon(pokemonId);

	const mainType = data?.types[0].type.name;

	const style = actived ? `color-${mainType}` : `bg-${mainType} text-white`;

	const handleOnSelected = useCallback(() => {
		if (onSelected) {
			onSelected(pokemonId);
		}
	}, [onSelected, pokemonId]);

	if (!data) {
		return null;
	}

	const content = (
		<dl
			className={`${style} border-2 border-${mainType} text-center p-2 m-0 rounded transition-all hover:translate-y-[-5px]`}
		>
			<dt className='m-0'>
				<img
					src={data.sprites.other?.['official-artwork'].front_default}
					alt={data.name}
					className='block mx-auto'
				/>
			</dt>
			<dd className='m-0 truncate py-2 text-xs font-bold'>
				{formatPokemonName(data.name)}
			</dd>
		</dl>
	);

	return actived ? (
		<button onClick={handleOnSelected}>{content}</button>
	) : (
		<Link to={`/pokemon/${data.name}`} onClick={handleOnSelected}>
			{content}
		</Link>
	);
};
