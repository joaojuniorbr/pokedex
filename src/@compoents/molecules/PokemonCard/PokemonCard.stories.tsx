import type { Meta, StoryObj } from '@storybook/react';
import { PokemonCard } from './PokemonCard';

const meta = {
	title: 'Components/Molecules/PokemonCard',
	component: PokemonCard,
	tags: ['autodocs'],
	argTypes: {
		pokemonId: {
			control: {
				type: 'text',
			},
			description: 'ID ou Nome do Pokemon',
		},
		actived: {
			control: {
				type: 'boolean',
			},
			description: 'Se o card estiver ativo',
		},
	},
	decorators: [
		(Story) => (
			<div className='container'>
				<div className='row justify-center'>
					<div className='col-md-4 col-lg-3'>
						<Story />
					</div>
				</div>
			</div>
		),
	],
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pokemonId: '1',
		actived: false,
	},
};

export const Pikachu: Story = {
	args: {
		pokemonId: 'pikachu',
		actived: true,
	},
};
