import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HighlightHome } from './HighlightHome';

export default {
	title: 'Molecules/HighlightHome',
	component: HighlightHome,
} as ComponentMeta<typeof HighlightHome>;

export const Sample: ComponentStory<typeof HighlightHome> = (args) => (
	<HighlightHome {...args} />
);

Sample.args = {
	title: 'Sample Text',
	text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
};
