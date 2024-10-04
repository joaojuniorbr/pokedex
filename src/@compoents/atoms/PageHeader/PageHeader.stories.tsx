import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';

const meta = {
	title: 'Components/Atoms/PageHeader',
	component: PageHeader,
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: {
				type: 'text',
			},
			description: 'Título da página',
		},
	},
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Página X',
	},
};
