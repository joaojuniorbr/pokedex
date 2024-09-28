import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

export const LoginPage = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<main className='w-full flex items-center justify-center h-lvh'>
			<div className='container'>
				<div className='center-button'>
					<Button onClick={() => loginWithRedirect()}>ACESSAR</Button>
				</div>
			</div>
		</main>
	);
};
