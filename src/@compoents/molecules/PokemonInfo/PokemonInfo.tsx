import { PokemonSize } from '@compoents/atoms';

interface PokemonInfoProps {
	weight: number;
	height: number;
}

export const PokemonInfo = (props: PokemonInfoProps) => (
	<div className='row'>
		<div className='col'>
			<PokemonSize
				icon='ri-weight-line'
				value={`${props.weight} kg`}
				label='Peso'
			/>
		</div>
		<div className='col'>
			<PokemonSize
				icon='ri-expand-height-line'
				value={`${props.height * 10} cm`}
				label='Altura'
			/>
		</div>
	</div>
);
