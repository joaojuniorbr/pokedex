import type { Meta, StoryObj } from '@storybook/react';
import { PokemonTypes } from './PokemonTypes';

const meta = {
	title: 'Components/Molecules/PokemonTypes',
	component: PokemonTypes,
	tags: ['autodocs'],
} satisfies Meta<typeof PokemonTypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		types: [
			{ slot: 1, type: { url: '', name: 'fire' } },
			{ slot: 2, type: { url: '', name: 'flying' } },
		],
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
