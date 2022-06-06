import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderMenu } from './HeaderMenu';

export default {
	title: 'Molecules/HeaderMenu',
	component: HeaderMenu,
} as ComponentMeta<typeof HeaderMenu>;

export const Sample: ComponentStory<typeof HeaderMenu> = () => <HeaderMenu />;
