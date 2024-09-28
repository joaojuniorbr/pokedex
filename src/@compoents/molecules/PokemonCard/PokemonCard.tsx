import { formatPokemonName } from '@common/helper';
import { usePokemon } from '@hooks';
import { Link } from 'react-router-dom';

export const PokemonCard = ({
	pokemonId,
	actived,
}: {
	pokemonId: string;
	actived?: boolean;
}) => {
	const { data } = usePokemon(pokemonId);

	const mainType = data?.types[0].type.name;

	const style = actived ? `color-${mainType}` : `bg-${mainType} text-white`;

	if (!data) {
		return null;
	}

	return (
		<Link
			to={`/pokemon/${data.name}`}
			className={actived ? 'pointer-events-none' : 'pointer-events-auto'}
		>
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
		</Link>
	);
};
