import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta = {
	title: 'Components/Atoms/Loading',
	component: Loading,
	tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className='w-full relative justify-center items-center h-lvh bg-[#dd2120]'>
			<Loading {...args} className='absolute top-0 left-0 right-0 bottom-0' />
		</div>
	),
};
