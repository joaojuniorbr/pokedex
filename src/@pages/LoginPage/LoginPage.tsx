import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from '@compoents/atoms';
import { Button } from 'antd';

export const LoginPage = () => {
	const { loginWithRedirect, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className='w-full relative justify-center items-center h-lvh bg-[#dd2120]'>
				<Loading className='absolute top-0 left-0 right-0 bottom-0' />
			</div>
		);
	}

	return (
		<main className='w-full h-lvh bg-[url("/background-login.jpg")] bg-contain bg-bottom bg-no-repeat bg-[#e9eae4]'>
			<div className='text-center p-20'>
				<Button onClick={() => loginWithRedirect()} type='primary' size='large'>
					ACESSAR POKEDEX
				</Button>
			</div>
		</main>
	);
};
