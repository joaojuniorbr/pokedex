import { screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { describe, it, expect, vi } from 'vitest';
import { mockUser } from 'mocks';

vi.mock('@hooks', () => ({
	useTypes: () => ({
		data: {
			results: [{ name: 'grass' }, { name: 'fire' }, { name: 'water' }],
		},
	}),
}));

vi.mock('@auth0/auth0-react', () => ({
	useAuth0: () => ({
		isAuthenticated: true,
		user: mockUser,
		loginWithRedirect: vi.fn(),
		logout: vi.fn(),
		isLoading: false,
	}),
}));

describe('SearchBar', () => {
	it('should render the search input', () => {
		renderWithQueryClient(<SearchBar />);
		expect(screen.getByPlaceholderText('Pesquisar')).toBeInTheDocument();
	});

	it('should call onSearch when typing in the input', () => {
		const onSearchMock = vi.fn();
		renderWithQueryClient(<SearchBar onSearch={onSearchMock} />);

		const input = screen.getByPlaceholderText('Pesquisar');
		fireEvent.change(input, { target: { value: 'Pikachu' } });

		expect(onSearchMock).toHaveBeenCalledWith('Pikachu');
	});

	it('should toggle the filter modal', async () => {
		renderWithQueryClient(<SearchBar />);

		const filterButton = screen.getByTestId('filter-button');
		fireEvent.click(filterButton);

		expect(screen.getByText('Filtrar por tipo:')).toBeInTheDocument();

		const closeButton = screen.getByRole('button', { name: /close/i });
		fireEvent.click(closeButton);

		await waitFor(() =>
			expect(screen.queryByText(/Filtrar por tipo:/i)).not.toBeInTheDocument()
		);
	});

	it('should clear the filter when clear button is clicked', async () => {
		const onFilterMock = vi.fn();
		renderWithQueryClient(<SearchBar onFilter={onFilterMock} />);

		const filterButton = screen.getByTestId('filter-button');
		fireEvent.click(filterButton);

		const buttonType = screen.getByTestId('filter-search--button--fire');
		fireEvent.click(buttonType);

		const closeButton = screen.getByRole('button', { name: /close/i });
		fireEvent.click(closeButton);

		await waitFor(() => expect(onFilterMock).toHaveBeenCalledWith('fire'));

		const clearFilter = screen.getByTestId('filter-clear-button');
		fireEvent.click(clearFilter);

		await waitFor(() => expect(clearFilter).not.toBeInTheDocument());
	});
});
