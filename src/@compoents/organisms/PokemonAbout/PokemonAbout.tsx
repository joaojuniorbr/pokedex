import { getFlavorText } from '@common/helper';
import { PokemonInfo } from '@compoents/molecules';
import { useSpecies } from '@hooks';
import { Pokemon } from '@types';

export const PokemonAbout = ({ pokemon }: { pokemon: Pokemon }) => {
	const { data: species } = useSpecies(pokemon.name);

	return (
		<>
			{species && (
				<div
					className='mb-4 text-base text-center leading-relaxed'
					data-testid='pokemon-description'
				>
					{getFlavorText(species)}
				</div>
			)}
			<PokemonInfo weight={pokemon.weight} height={pokemon.height} />
		</>
	);
};
