import { fireEvent, screen } from '@testing-library/react';
import { ProfilePage } from './ProfilePage';
import { useAuth0 } from '@auth0/auth0-react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { mockUser } from 'mocks';

vi.mock('@auth0/auth0-react');

describe('ProfilePage', () => {
	const mockLogout = vi.fn();

	beforeEach(() => {
		(useAuth0 as Mock).mockReturnValue({
			user: mockUser,
			logout: mockLogout,
		});
	});

	it('renders the PageHeader and UserProfile components', () => {
		renderWithQueryClient(<ProfilePage />);

		expect(screen.getByText('Perfil')).toBeInTheDocument();
		expect(screen.getByText(mockUser.name)).toBeInTheDocument();
		expect(screen.getByText(mockUser.email)).toBeInTheDocument();
	});

	it('passes the user and logout props to UserProfile', () => {
		renderWithQueryClient(<ProfilePage />);

		const logoutButton = screen.getByTestId('logout-button');
		fireEvent.click(logoutButton);

		expect(mockLogout).toHaveBeenCalledTimes(1);
	});
});
