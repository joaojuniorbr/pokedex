import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from 'src/@common/ui';

import { IconType } from './IconType';

const Wrapper = styled('div', {
	display: 'inline-flex',
});

export default {
	title: 'Atoms/IconType',
	component: IconType,
} as ComponentMeta<typeof IconType>;

export const Sample: ComponentStory<typeof IconType> = (args) => (
	<Wrapper>
		<IconType {...args} />
	</Wrapper>
);

Sample.argTypes = {
	name: {
		options: [
			'bug',
			'dark',
			'dragon',
			'electric',
			'fairy',
			'fighting',
			'fire',
			'flying',
			'ghost',
			'grass',
			'ground',
			'ice',
			'normal',
			'poison',
			'psychic',
			'rock',
			'steel',
			'water',
			'unknown',
			'shadow',
		],
		control: {
			type: 'select',
		},
	},

	size: {
		options: ['default', 'lg', 'icon', 'icon-sm'],
		control: {
			type: 'radio',
		},
	},
};

Sample.args = {
	name: 'bug',
};
