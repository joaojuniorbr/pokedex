import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from './LoginPage'; // Altere o caminho conforme necessário
import { useAuth0 } from '@auth0/auth0-react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

vi.mock('@auth0/auth0-react');

describe('LoginPage', () => {
	const mockLoginWithRedirect = vi.fn();

	beforeEach(() => {
		(useAuth0 as Mock).mockReturnValue({
			loginWithRedirect: mockLoginWithRedirect,
			isLoading: false,
		});
	});

	it('should show login button when isLoading is false', () => {
		render(<LoginPage />);

		const loginButton = screen.getByRole('button', {
			name: /acessar pokedex/i,
		});
		expect(loginButton).toBeInTheDocument();

		fireEvent.click(loginButton);
		expect(mockLoginWithRedirect).toHaveBeenCalledTimes(1);
	});
});
