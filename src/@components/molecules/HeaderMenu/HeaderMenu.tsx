import { RiFilter3Line, RiSettings3Line, RiHome2Line } from 'react-icons/ri';

import { styled } from 'src/@common/ui';

import { IconHeaderMenu } from 'src/@components/atoms';

const Wrapper = styled('div', {
	display: 'inline',

	ul: {
		alignItems: 'center',
		display: 'flex',
		listStyle: 'none',
	},
});

export const HeaderMenu = () => {
	const ITEMS_MENU = [
		{
			icon: <RiHome2Line />,
			name: 'Home',
			url: '/',
		},
		{
			icon: <RiFilter3Line />,
			name: 'Filtros',
			url: '/tipos',
		},
		{
			icon: <RiSettings3Line />,
			name: 'Configurações',
			url: '/configuracoes',
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
