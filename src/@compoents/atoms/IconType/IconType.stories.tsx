import type { Meta, StoryObj } from '@storybook/react';
import { IconType } from './IconType';

const meta = {
	title: 'Components/Atoms/IconType',
	component: IconType,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: {
				type: 'select',
			},
			options: [
				'bug',
				'dragon',
				'electric',
				'fairy',
				'fighting',
				'fire',
				'flying',
				'ghost',
				'grass',
				'ground',
				'ice',
				'normal',
				'poison',
				'psychic',
				'rock',
				'steel',
				'water',
			],
			defaultValue: 'bug',
			description:
				'Nome do tipo de pokemon, este nome é traduzido para português.',
		},
		isLabel: {
			control: 'boolean',
			description:
				'Estilo customizado, é possivel escolher entre outline e solid e adicionar o nome do tipo ao lado do icone.',
		},
		variant: {
			control: {
				type: 'radio',
			},
			options: ['outline', 'solid'],
			description:
				'Estilo customizado, é possivel escolher entre outline e solid e adicionar o nome do tipo ao lado do icone.',
		},
	},
} satisfies Meta<typeof IconType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'bug',
		isLabel: true,
	},
};
