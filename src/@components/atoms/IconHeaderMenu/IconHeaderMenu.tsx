import { useNavigate } from 'react-router-dom';
import { styled } from 'src/@common/ui';

import { IIconHeaderMenu } from 'src/@types';

interface IIconHeaderMenuProp {
	item: IIconHeaderMenu;
}

const Wrapper = styled('button', {
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
});

export const IconHeaderMenu = ({ item }: IIconHeaderMenuProp) => {
	const navigate = useNavigate();

	const handleClick = (url: string) => {
		navigate(url);
	};

	return (
		<Wrapper
			type='button'
			onClick={() => handleClick(item.url)}
			aria-label={item.name}>
			{item.icon}
		</Wrapper>
	);
};
