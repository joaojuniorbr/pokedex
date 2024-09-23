import { Link } from 'react-router-dom';

import { formatPokemonName } from '@common/helper';

interface PokemonSingleHeaderProps {
	name: string;
	type: string;
	id: string;
}

const HeaderContainer = (props: PokemonSingleHeaderProps) => (
	<div className='container'>
		<div className='row align-items-center g-3'>
			<div className='col-auto'>
				<Link to='/' className='text-2xl'>
					<i className='ri-arrow-left-s-line' />
				</Link>
			</div>
			<div className='col'>
				<h1 className='m-0 uppercase text-xl font-bold truncate'>
					{formatPokemonName(props.name)}
				</h1>
			</div>
			<div className='col-auto'>
				<span
					className={`bg-white p-2 rounded-md font-bold color-${props.type}`}
				>
					{props.id}
				</span>
			</div>
		</div>
	</div>
);

export const PokemonSingleHeader = (props: PokemonSingleHeaderProps) => {
	return (
		<header className={`bg-${props.type} text-white pt-4`}>
			<HeaderContainer {...props} />
		</header>
	);
};
