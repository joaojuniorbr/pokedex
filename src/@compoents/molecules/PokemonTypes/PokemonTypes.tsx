import { IconType } from '@compoents/atoms';
import { Type } from '@types';

export const PokemonTypes = ({ types }: { types: Type[] }) => (
	<div className='row justify-center g-3'>
		{types.map((type) => (
			<div className='col-auto' key={type.slot}>
				<IconType name={type.type.name} custom={{ isLabel: true }} />
			</div>
		))}
	</div>
);
