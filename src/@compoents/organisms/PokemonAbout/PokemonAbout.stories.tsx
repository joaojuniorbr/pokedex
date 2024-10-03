import type { Meta, StoryObj } from '@storybook/react';
import { PokemonAbout } from './PokemonAbout';
import { mockPokemon } from 'mocks';

const meta = {
	title: 'Components/Organisms/PokemonAbout',
	component: PokemonAbout,
	tags: ['autodocs'],
} satisfies Meta<typeof PokemonAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pokemon: mockPokemon,
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
