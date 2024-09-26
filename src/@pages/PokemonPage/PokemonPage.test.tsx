import { screen } from '@testing-library/react';
import { PokemonPage } from './PokemonPage';
import { useParams } from 'react-router-dom';
import { usePokemon } from '@hooks';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { mockPokemon } from 'mocks';

vi.mock('react-router-dom', async () => {
	const original = await vi.importActual('react-router-dom');
	return {
		...original,
		useParams: vi.fn(),
		Link: (
			props: React.DetailedHTMLProps<
				React.AnchorHTMLAttributes<HTMLAnchorElement>,
				HTMLAnchorElement
			>
		) => <a {...props}>{props.children}</a>,
	};
});

vi.mock('@hooks', async () => {
	const original = await vi.importActual('@hooks');
	return {
		...original,
		usePokemon: vi.fn(),
	};
});

describe('PokemonPage', () => {
	beforeEach(() => {
		(useParams as Mock).mockReturnValue({ idPokemon: '1' });
	});

	it('displays spinner while the Pokemon is loading', () => {
		(usePokemon as Mock).mockReturnValue({ data: null, isLoading: true });

		renderWithQueryClient(<PokemonPage />);

		expect(screen.getByText('Carregando as informações')).toBeInTheDocument();
	});

	it('displays Pokemon details when loaded', () => {
		(usePokemon as Mock).mockReturnValue({
			data: mockPokemon,
			isLoading: false,
		});

		renderWithQueryClient(<PokemonPage />);

		expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
		expect(screen.getByText('#001')).toBeInTheDocument(); // Formato de ID
	});

	it('displays Empty when no Pokemon is found', () => {
		(usePokemon as Mock).mockReturnValue({
			data: null,
			isLoading: false,
		});

		renderWithQueryClient(<PokemonPage />);

		expect(screen.getByText('No data')).toBeInTheDocument();
	});
});
