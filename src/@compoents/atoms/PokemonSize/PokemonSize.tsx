interface PokemonSizeProps {
	icon: string;
	value: string;
	label: string;
}

export const PokemonSize = (props: PokemonSizeProps) => (
	<div className='bg-slate-100 py-4 px-3 rounded-md border border-slate-300'>
		<div className='row align-items-center g-2'>
			<div className='col-auto col-md-6'>
				<span className='text-5xl block text-right'>
					<i className={props.icon} data-testid={props.icon} />
				</span>
			</div>
			<div className='col col-md-6'>
				<span className='text-xl font-bold block leading-normal'>
					{props.value}
				</span>
				<span className='text-xs block leading-none uppercase text-slate-500'>
					{props.label}
				</span>
			</div>
		</div>
	</div>
);
