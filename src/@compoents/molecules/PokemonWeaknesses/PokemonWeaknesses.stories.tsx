import type { Meta, StoryObj } from '@storybook/react';
import { PokemonWeaknesses } from './PokemonWeaknesses';

const meta = {
	title: 'Components/Molecules/PokemonWeaknesses',
	component: PokemonWeaknesses,
	tags: ['autodocs'],
	argTypes: {
		pokemonId: {
			control: {
				type: 'text',
			},
		},
	},
} satisfies Meta<typeof PokemonWeaknesses>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pokemonId: 'pikachu',
		types: [
			{ slot: 1, type: { url: '', name: 'grass' } },
			{ slot: 2, type: { url: '', name: 'poison' } },
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
