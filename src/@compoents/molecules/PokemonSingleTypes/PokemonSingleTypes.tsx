import { TypeNames } from '@assets/types';
import { IconType } from '@compoents/atoms';
import { Type } from '@types';

export const PokemonSingleTypes = ({ types }: { types: Type[] }) => (
	<div className='row justify-center g-3'>
		{types.map((type) => (
			<div className='col-auto' key={type.slot}>
				<div
					className={`bg-${type.type.name} py-2 px-3 rounded-md text-white flex items-center`}
				>
					<span className='w-6 mr-2'>
						<IconType name={type.type.name} />
					</span>
					{TypeNames[type.type.name as keyof typeof TypeNames]}
				</div>
			</div>
		))}
	</div>
);
