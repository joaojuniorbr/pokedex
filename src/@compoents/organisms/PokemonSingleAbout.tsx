import { getFlavorText } from '@common/helper';
import { PokemonInfo } from '@compoents/molecules';
import { useSpecies } from '@hooks';
import { Pokemon } from '@types';

export const PokemonSingleAbout = ({ pokemon }: { pokemon: Pokemon }) => {
	const { data: species } = useSpecies(pokemon.name);

	if (!species) {
		return null;
	}

	return (
		<div className='container'>
			<div className='row justify-center'>
				<div className='col-md-6 col-lg-6'>
					<div className='mb-4 text-base text-center leading-relaxed'>
						{getFlavorText(species)}
					</div>
					<PokemonInfo weight={pokemon.weight} height={pokemon.height} />
				</div>
			</div>
		</div>
	);
};
