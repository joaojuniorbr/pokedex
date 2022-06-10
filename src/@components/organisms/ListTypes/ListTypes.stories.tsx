import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListTypes } from './ListTypes';

export default {
	title: 'Organisms/ListTypes',
	component: ListTypes,
} as ComponentMeta<typeof ListTypes>;

export const Sample: ComponentStory<typeof ListTypes> = () => <ListTypes />;
