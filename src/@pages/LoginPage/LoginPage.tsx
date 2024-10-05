import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { useCallback } from 'react';

export const LoginPage = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = useCallback(() => {
		loginWithRedirect();
	}, [loginWithRedirect]);

	return (
		<main className='w-full h-lvh bg-[url("/background-login.jpg")] bg-contain bg-bottom bg-no-repeat bg-[#e9eae4]'>
			<div className='text-center p-20'>
				<Button onClick={handleLogin} type='primary' size='large'>
					ACESSAR POKEDEX
				</Button>
			</div>
		</main>
	);
};
