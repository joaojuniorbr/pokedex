import { screen, fireEvent } from '@testing-library/react';
import { HomePage } from '@pages';
import { useSearch } from '@hooks';
import { beforeEach, describe, vi, Mock, it, expect } from 'vitest';

vi.mock('@hooks', async () => {
	const original = await vi.importActual('@hooks');
	return {
		...original,
		useSearch: vi.fn(),
		useTypes: () => ({
			data: {
				results: [{ name: 'grass' }, { name: 'fire' }, { name: 'electric' }],
			},
		}),
	};
});

const mockPokemons = [
	{ name: 'Pikachu' },
	{ name: 'Charmander' },
	{ name: 'Bulbasaur' },
	{ name: 'Squirtle' },
	{ name: 'Caterpie' },
	{ name: 'Krabby' },
	{ name: 'Tentacool' },
	{ name: 'Piplup' },
	{ name: 'Diglett' },
	{ name: 'Geodude' },
	{ name: 'Spearow' },
	{ name: 'Mankey' },
	{ name: 'Pidgey' },
	{ name: 'Staryu' },
];

describe('HomePage', () => {
	beforeEach(() => {
		(useSearch as Mock).mockReturnValue({
			data: mockPokemons,
			isLoading: false,
			refetch: vi.fn(),
		});
	});

	it('renders correctly and displays Pokémons', () => {
		renderWithQueryClient(<HomePage />);

		expect(screen.getByTestId('pokemon-Pikachu')).toBeInTheDocument();
		expect(screen.getByTestId('pokemon-Charmander')).toBeInTheDocument();
		expect(screen.getByTestId('pokemon-Bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('pokemon-Squirtle')).toBeInTheDocument();
	});

	it('filters Pokémons by search term', () => {
		renderWithQueryClient(<HomePage />);

		const searchInput = screen.getByTestId('filter-input');
		fireEvent.change(searchInput, { target: { value: 'pikachu' } });

		const filterButton = screen.getByTestId('filter-button');
		fireEvent.click(filterButton);

		const typeButton = screen.getByTestId('filter-search--button--electric');
		fireEvent.click(typeButton);

		vi.useFakeTimers();
		vi.advanceTimersByTime(200);

		expect(screen.getByTestId('pokemon-Pikachu')).toBeInTheDocument();
		expect(screen.queryByTestId('pokemon-Charmander')).not.toBeInTheDocument();
	});

	it('changes page when clicking on pagination', () => {
		renderWithQueryClient(<HomePage />);

		const paginationButton = screen.getByText('2');
		fireEvent.click(paginationButton);

		expect(useSearch).toHaveBeenCalled();
	});

	it('displays an error message when no Pokémons are found', () => {
		(useSearch as Mock).mockReturnValue({
			data: [],
			isLoading: false,
			refetch: vi.fn(),
		});

		renderWithQueryClient(<HomePage />);
		expect(screen.getByText('Nenhum pokemon encontrado')).toBeInTheDocument();
	});

	it('loading info and not display Pokemons', () => {
		(useSearch as Mock).mockReturnValue({
			data: mockPokemons,
			isLoading: true,
			refetch: vi.fn(),
		});

		renderWithQueryClient(<HomePage />);

		expect(screen.getByText('Carregando as informações')).toBeInTheDocument();
	});
});
