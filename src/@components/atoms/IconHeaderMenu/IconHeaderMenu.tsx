import { IIconHeaderMenu } from 'src/@types';

interface IIconHeaderMenuProp {
	item: IIconHeaderMenu;
}

export const IconHeaderMenu = ({ item }: IIconHeaderMenuProp) => (
	<button type='button' onClick={item.handleClick}>
		{item.icon}
	</button>
);
