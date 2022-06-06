import { RiFilter3Line, RiSettings3Line, RiHome2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { styled } from 'src/@common/ui';

import { IconHeaderMenu } from 'src/@components/atoms';

const Wrapper = styled('div', {
	display: 'inline',

	ul: {
		alignItems: 'center',
		display: 'flex',
		listStyle: 'none',

		li: {
			button: {
				alignItems: 'center',
				background: 'transparent',
				border: 'none',
				color: '$dark',
				display: 'flex',
				fontSize: '20px',
				height: 40,
				justifyContent: 'center',
				width: 40,

				svg: {
					display: 'block',
				},
			},
		},
	},
});

export const HeaderMenu = () => {
	const navigate = useNavigate();

	const ITEMS_MENU = [
		{
			icon: <RiHome2Line />,
			name: '',
			handleClick: () => navigate('/'),
		},
		{
			icon: <RiFilter3Line />,
			name: 'Filtros',
			handleClick: () => navigate('/tipos'),
		},
		{
			icon: <RiSettings3Line />,
			name: 'Configurações',
			handleClick: () => {},
		},
	];

	return (
		<Wrapper>
			<ul>
				{ITEMS_MENU.map((item) => (
					<li key={item.name}>
						<IconHeaderMenu item={item} />
					</li>
				))}
			</ul>
		</Wrapper>
	);
};
