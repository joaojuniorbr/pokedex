import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
	title: 'Components/Organisms/SearchBar',
	component: SearchBar,
	tags: ['autodocs'],
	argTypes: {
		onFilter: {
			action: 'onFilter',
		},
		onSearch: {
			action: 'onSearch',
		},
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className='bg-black pb-3'>
				<div className='container'>
					<Story />
				</div>
			</div>
		),
	],
};
