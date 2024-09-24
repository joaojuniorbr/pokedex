// FilterSearch.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterSearch } from './FilterSearch';

// Mock da hook useTypes
vi.mock('@hooks', () => ({
	useTypes: () => ({
		data: {
			results: [{ name: 'grass' }, { name: 'fire' }, { name: 'water' }],
		},
	}),
}));

describe('FilterSearch Component', () => {
	it('should render the title and buttons for each type', () => {
		render(<FilterSearch />);

		const title = screen.getByText('Filtrar por tipo:');
		expect(title).toBeInTheDocument();

		expect(screen.getByText('Planta')).toBeInTheDocument();
		expect(screen.getByText('Fogo')).toBeInTheDocument();
		expect(screen.getByText('Água')).toBeInTheDocument();
	});

	it('should call onChange with the correct value when a button is clicked', () => {
		const handleChange = vi.fn();
		render(<FilterSearch value='fire' onChange={handleChange} />);

		const fireButton = screen.getByText('Fogo').closest('button');
		expect(fireButton).toHaveClass('bg-fire text-white');

		fireEvent.click(screen.getByText('Planta'));
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith('grass');
	});
});
