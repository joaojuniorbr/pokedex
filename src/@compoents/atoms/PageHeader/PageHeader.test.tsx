import { screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';
import { describe, expect, it } from 'vitest';

describe('PageHeader', () => {
	it('renders the title correctly', () => {
		renderWithQueryClient(<PageHeader title='Test Title' />);

		const title = screen.getByRole('heading', { name: /test title/i });
		expect(title).toBeInTheDocument();
	});

	it('renders the back button with correct link', () => {
		renderWithQueryClient(<PageHeader title='Test Title' />);

		const backButton = screen.getByTestId('back-button');
		expect(backButton).toBeInTheDocument();
		expect(backButton).toHaveAttribute('href', '/');
	});
});
