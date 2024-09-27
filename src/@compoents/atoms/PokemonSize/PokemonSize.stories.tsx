import type { Meta, StoryObj } from '@storybook/react';
import { PokemonSize } from './PokemonSize';

const meta = {
	title: 'Components/Atoms/PokemonSize',
	component: PokemonSize,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: {
				type: 'select',
			},
			options: ['ri-weight-line', 'ri-expand-height-line'],
			defaultValue: 'ri-weight-scale',
			description: 'Adicione um icone do remixicon.com',
		},
		label: {
			control: {
				type: 'text',
			},
			description: 'Adicione um label',
		},
		value: {
			control: {
				type: 'text',
			},
			description: 'Adicione um valor',
		},
	},
} satisfies Meta<typeof PokemonSize>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'ri-weight-line',
		label: 'Peso',
		value: '60 kg',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '180px' }}>
				<Story />
			</div>
		),
	],
};
