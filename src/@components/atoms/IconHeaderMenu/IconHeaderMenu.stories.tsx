import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BsCheckCircle } from 'react-icons/bs';

import { styled } from 'src/@common/ui';

import { IconHeaderMenu } from './IconHeaderMenu';

const Wrapper = styled('div', {
	display: 'inline-flex',
});

export default {
	title: 'Atoms/IconHeaderMenu',
	component: IconHeaderMenu,
} as ComponentMeta<typeof IconHeaderMenu>;

export const Sample: ComponentStory<typeof IconHeaderMenu> = (args) => (
	<Wrapper>
		<IconHeaderMenu {...args} />
	</Wrapper>
);

Sample.args = {
	item: {
		url: '/test-sample',
		name: 'sample',
		icon: <BsCheckCircle />,
	},
};
