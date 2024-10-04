import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from './UserProfile';
import { mockUser } from 'mocks';

const meta = {
	title: 'Components/Molecules/UserProfile',
	component: UserProfile,
	tags: ['autodocs'],
	argTypes: {
		user: {
			control: {
				type: 'object',
			},
			defaultValue: mockUser,
		},
		logout: {
			action: 'onLogout',
		},
	},
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		user: mockUser,
	},
	decorators: [
		(Story) => (
			<div className='container'>
				<div className='row justify-center'>
					<div className='col-md-6'>
						<Story />
					</div>
				</div>
			</div>
		),
	],
};
