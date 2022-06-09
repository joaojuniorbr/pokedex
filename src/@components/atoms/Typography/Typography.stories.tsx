import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
	title: 'Atoms/Typography',
	component: Typography,
} as ComponentMeta<typeof Typography>;

export const Sample: ComponentStory<typeof Typography> = (args) => (
	<Typography {...args} />
);

Sample.argTypes = {
	name: {
		options: ['default', 'title'],
		control: {
			type: 'radio',
		},
	},
};

Sample.args = {
	name: 'default',
	children: 'Sample Text',
};
