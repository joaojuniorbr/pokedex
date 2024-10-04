import { useAuth0 } from '@auth0/auth0-react';
import { PageHeader } from '@compoents/atoms';
import { UserProfile } from '@compoents/molecules';

export const ProfilePage = () => {
	const { user, logout } = useAuth0();

	return (
		<>
			<PageHeader title='Perfil' />

			<div className='container'>
				<section className='py-3'>
					<UserProfile user={user} logout={logout} />
				</section>
			</div>
		</>
	);
};
