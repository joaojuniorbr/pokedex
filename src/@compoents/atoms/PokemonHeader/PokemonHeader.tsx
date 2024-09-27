import { Link } from 'react-router-dom';

import { formatPokemonName } from '@common/helper';

interface PokemonHeaderProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	name: string;
	type: string;
	id: string;
}

const HeaderContainer = (props: PokemonHeaderProps) => (
	<div className='container'>
		<div className='row align-items-center g-3'>
			<div className='col-auto'>
				<Link to='/' className='text-2xl' data-testid='back-button'>
					<i className='ri-arrow-left-s-line' />
				</Link>
			</div>
			<div className='col'>
				<h1
					className='m-0 uppercase text-xl font-bold truncate'
					data-testid='pokemon-name'
				>
					{formatPokemonName(props.name)}
				</h1>
			</div>
			<div className='col-auto'>
				<span
					className={`bg-white p-2 rounded-md font-bold color-${props.type}`}
					data-testid='pokemon-id'
				>
					{props.id}
				</span>
			</div>
		</div>
	</div>
);

export const PokemonHeader = (props: PokemonHeaderProps) => {
	return (
		<header
			{...props}
			className={`bg-${props.type} text-white pt-4 ${props.className}`}
		>
			<HeaderContainer {...props} />
		</header>
	);
};
