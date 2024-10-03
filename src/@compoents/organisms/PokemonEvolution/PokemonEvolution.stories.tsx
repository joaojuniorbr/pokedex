import type { Meta, StoryObj } from '@storybook/react';
import { PokemonEvolution } from './PokemonEvolution';
import { mockPokemon } from 'mocks';

const meta = {
	title: 'Components/Organisms/PokemonEvolution',
	component: PokemonEvolution,
	tags: ['autodocs'],
} satisfies Meta<typeof PokemonEvolution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pokemonId: mockPokemon.name,
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
