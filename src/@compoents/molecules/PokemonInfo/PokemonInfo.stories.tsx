import type { Meta, StoryObj } from '@storybook/react';
import { PokemonInfo } from './PokemonInfo';

const meta = {
	title: 'Components/Molecules/PokemonInfo',
	component: PokemonInfo,
	tags: ['autodocs'],
	argTypes: {
		height: {
			control: {
				type: 'number',
			},
			description: 'Altura do Pokemon',
		},
		weight: {
			control: {
				type: 'number',
			},
			description: 'Peso do Pokemon',
		},
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
} satisfies Meta<typeof PokemonInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		height: 2,
		weight: 10,
	},
};
