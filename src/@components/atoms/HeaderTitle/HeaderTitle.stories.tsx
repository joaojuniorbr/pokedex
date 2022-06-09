import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from 'src/@common/ui';

import { HeaderTitle } from './HeaderTitle';

const Wrapper = styled('div', {
	paddingBottom: '$5',
	borderColor: '$lightGray',
	borderBottomWidth: 'thin',
	borderBottomStyle: 'solid',
});

export default {
	title: 'Atoms/HeaderTitle',
	component: HeaderTitle,
} as ComponentMeta<typeof HeaderTitle>;

export const Sample: ComponentStory<typeof HeaderTitle> = (args) => (
	<Wrapper>
		<HeaderTitle {...args} />
	</Wrapper>
);

Sample.args = {
	title: 'Sample Text',
};
