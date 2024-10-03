import type { Meta, StoryObj } from '@storybook/react';
import { PokemonItemList } from './PokemonItemList';

const meta = {
	title: 'Components/Molecules/PokemonItemList',
	component: PokemonItemList,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: {
				type: 'text',
			},
			description: 'ID ou Nome do Pokemon',
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
} satisfies Meta<typeof PokemonItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: '1',
	},
};

export const Pikachu: Story = {
	args: {
		name: 'pikachu',
	},
};
