import { useParams } from 'react-router-dom';

import { usePokemon } from '@hooks';
import { PokemonSingleHeader } from '@compoents/atoms';
import { formatPokemonNumber } from '@common/helper';

export const PokemonPage = () => {
	const { idPokemon } = useParams();

	const { data: pokemon } = usePokemon(idPokemon as string);

	if (!pokemon) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<PokemonSingleHeader
				name={pokemon.name}
				type={pokemon.types[0].type.name}
				id={formatPokemonNumber(pokemon.id)}
			/>
		</main>
	);
};
