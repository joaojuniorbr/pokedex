import { User } from '@auth0/auth0-react';
import { Button } from 'antd';

interface UserProfileProps {
	user?: User;
	logout?: () => void;
}

export const UserProfile = (props: UserProfileProps) => (
	<div className='max-w-lg mx-auto  bg-white shadow-xl rounded-lg text-gray-900'>
		<div className='rounded-t-lg h-32 overflow-hidden bg-primary' />
		<div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
			<img
				className='object-cover object-center h-32'
				src={props.user?.picture}
				alt={props.user?.name}
			/>
		</div>
		<div className='text-center mt-2'>
			<h2 className='font-semibold'>{props.user?.name}</h2>
			<p className='text-gray-500'>{props.user?.email}</p>
		</div>
		<div className='py-4 border-t mx-4 mt-4'>
			<Button
				size='large'
				block
				danger
				onClick={props.logout}
				data-testid='logout-button'
			>
				Sair
			</Button>
		</div>
	</div>
);
