import { render, screen } from '@testing-library/react';
import { PokemonEvolution } from './PokemonEvolution';
import { useEvolution } from '@hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

vi.mock('@hooks', () => ({
	useEvolution: vi.fn(),
}));

vi.mock('@compoents/molecules', () => ({
	PokemonCard: ({
		pokemonId,
		actived,
	}: {
		pokemonId: string;
		actived?: boolean;
	}) => (
		<div data-testid='pokemon-card' className={actived ? 'active' : ''}>
			{pokemonId}
		</div>
	),
}));

describe('PokemonEvolution', () => {
	const mockEvolutionData = [
		{ species_name: 'bulbasaur', species_id: 1, evolves_to: [] },
		{ species_name: 'ivysaur', species_id: 2, evolves_to: [] },
		{ species_name: 'venusaur', species_id: 3, evolves_to: [] },
	];

	beforeEach(() => {
		(useEvolution as Mock).mockReturnValue({ data: mockEvolutionData });
	});

	it('should render the Pokemon evolution chain correctly', () => {
		render(
			<Router>
				<PokemonEvolution pokemonId='bulbasaur' />
			</Router>
		);

		const pokemonCards = screen.getAllByTestId('pokemon-card');
		expect(pokemonCards).toHaveLength(3);
		expect(pokemonCards[0]).toHaveTextContent('bulbasaur');
		expect(pokemonCards[1]).toHaveTextContent('ivysaur');
		expect(pokemonCards[2]).toHaveTextContent('venusaur');

		const arrows = screen.getAllByLabelText('Próxima Evolução');
		expect(arrows).toHaveLength(2);
	});

	it('should highlight the active Pokemon in the evolution chain', () => {
		render(
			<Router>
				<PokemonEvolution pokemonId='ivysaur' />
			</Router>
		);
		const activeCard = screen.getByText('ivysaur');
		expect(activeCard).toHaveClass('active');
	});
});
