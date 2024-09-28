import type { Meta, StoryObj } from '@storybook/react';
import { FilterSearch } from './FilterSearch';
import { optionsTypes } from 'mocks';

const meta = {
	title: 'Components/Molecules/FilterSearch',
	component: FilterSearch,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: {
				type: 'select',
			},
			options: ['', ...optionsTypes],
		},
		onChange: {
			action: 'onChange',
		},
	},
} satisfies Meta<typeof FilterSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className='container'>
				<div className='row justify-center'>
					<div className='col-md-6'>
						<Story />
					</div>
				</div>
			</div>
		),
	],
};
