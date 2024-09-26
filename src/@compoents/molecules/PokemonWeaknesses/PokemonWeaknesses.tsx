import { IconType } from '@compoents/atoms';
import { useWeaknesses } from '@hooks';
import { Type } from '@types';

interface PokemonWeaknessesProps {
	pokemonId: string;
	types: Type[];
}

export const PokemonWeaknesses = (props: PokemonWeaknessesProps) => {
	const types = props.types.map((item) => item.type.name);
	const { data } = useWeaknesses(props.pokemonId, types);

	if (!data) {
		return null;
	}

	return (
		<div className='row g-3'>
			{data?.map((item) => (
				<div className='col-6 col-lg-4' key={item.url}>
					<IconType
						name={item.name}
						custom={{ isLabel: true, style: 'outline' }}
					/>
				</div>
			))}
		</div>
	);
};
