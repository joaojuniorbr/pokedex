import type { Meta, StoryObj } from '@storybook/react';
import { PokemonHeader } from './PokemonHeader';
import { optionsTypes } from 'mocks';

const meta = {
	title: 'Components/Atoms/PokemonHeader',
	component: PokemonHeader,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: optionsTypes,
			defaultValue: 'bug',
			description: 'Tipo de pokemon',
		},
		id: {
			control: {
				type: 'text',
			},
			description: 'Número do Pokemon',
		},
		name: {
			control: {
				type: 'text',
			},
			description: 'ID do Pokemin',
		},
	},
} satisfies Meta<typeof PokemonHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'fire',
		id: '1',
		name: 'Charmander',
	},
	render: (args) => <PokemonHeader {...args} className='pb-4 px-10' />,
};
