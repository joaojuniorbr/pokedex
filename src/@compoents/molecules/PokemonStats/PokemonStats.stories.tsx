import type { Meta, StoryObj } from '@storybook/react';
import { PokemonStats } from './PokemonStats';
import { mockStats, optionsTypes } from 'mocks';

const meta = {
	title: 'Components/Molecules/PokemonStats',
	component: PokemonStats,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: optionsTypes,
		},
	},
} satisfies Meta<typeof PokemonStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'fire',
		stats: mockStats,
	},
	decorators: [
		(Story) => (
			<div className='container'>
				<div className='row justify-center'>
					<div className='col-md-8'>
						<Story />
					</div>
				</div>
			</div>
		),
	],
};
