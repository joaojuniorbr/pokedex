import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { PokemonHeader } from './PokemonHeader';

vi.mock('@common/helper', () => ({
	formatPokemonName: (name: string) => `Formatted ${name}`,
}));

describe('PokemonHeader', () => {
	const props = {
		name: 'pikachu',
		type: 'electric',
		id: '025',
	};

	it('should render the back button correctly', () => {
		render(
			<MemoryRouter>
				<PokemonHeader {...props} />
			</MemoryRouter>
		);
		const backButton = screen.getByTestId('back-button');
		expect(backButton).toBeInTheDocument();
		expect(backButton).toHaveAttribute('href', '/');
	});

	it('should display formatted pokemon name', () => {
		render(
			<MemoryRouter>
				<PokemonHeader {...props} />
			</MemoryRouter>
		);

		const pokemonName = screen.getByTestId('pokemon-name');
		expect(pokemonName).toBeInTheDocument();
		expect(pokemonName).toHaveTextContent('Formatted pikachu');
	});

	it('should display pokemon id with correct type-based styling', () => {
		render(
			<MemoryRouter>
				<PokemonHeader {...props} />
			</MemoryRouter>
		);

		const pokemonId = screen.getByTestId('pokemon-id');
		expect(pokemonId).toBeInTheDocument();
		expect(pokemonId).toHaveTextContent(props.id);
		expect(pokemonId).toHaveClass('color-electric');
	});

	it('should have the correct background color based on pokemon type', () => {
		render(
			<MemoryRouter>
				<PokemonHeader {...props} />
			</MemoryRouter>
		);

		const header = screen.getByRole('banner');
		expect(header).toHaveClass('bg-electric');
	});
});
