import { fireEvent, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';
import { describe, expect, it, vi } from 'vitest';
import { mockUser } from 'mocks';

describe('UserProfile', () => {
	it('renders user profile correctly', () => {
		renderWithQueryClient(<UserProfile user={mockUser} />);

		const userName = screen.getByText(mockUser.name);
		const userEmail = screen.getByText(mockUser.email);
		const userImage = screen.getByAltText(mockUser.name);

		expect(userName).toBeInTheDocument();
		expect(userEmail).toBeInTheDocument();
		expect(userImage).toHaveAttribute('src', mockUser.picture);
	});

	it('calls the logout function when the button is clicked', () => {
		const mockLogout = vi.fn();

		renderWithQueryClient(<UserProfile user={mockUser} logout={mockLogout} />);

		const logoutButton = screen.getByTestId('logout-button');
		fireEvent.click(logoutButton);

		expect(mockLogout).toHaveBeenCalledTimes(1);
	});
});
