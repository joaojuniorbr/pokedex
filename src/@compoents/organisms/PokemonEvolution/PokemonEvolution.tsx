import { PokemonCard } from '@compoents/molecules';
import { useEvolution } from '@hooks';
import { Fragment } from 'react';

export const PokemonEvolution = ({ pokemonId }: { pokemonId: string }) => {
	const { data } = useEvolution(pokemonId);

	return (
		<div className='row g-0 justify-center items-center'>
			{data?.map((item, index) => (
				<Fragment key={item.species_id}>
					{index !== 0 && (
						<div className='col-auto'>
							<span
								className='p-2 text-2xl text-slate-300'
								aria-label='Próxima Evolução'
							>
								<i className='ri-arrow-right-line' />
							</span>
						</div>
					)}
					<div className='col'>
						<PokemonCard
							pokemonId={item.species_name}
							actived={pokemonId === item.species_name}
						/>
					</div>
				</Fragment>
			))}
		</div>
	);
};
