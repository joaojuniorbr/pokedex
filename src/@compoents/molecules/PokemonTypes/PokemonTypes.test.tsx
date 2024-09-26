import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PokemonTypes } from './PokemonTypes';

const mockTypes = [
	{ slot: 1, type: { url: '', name: 'fire' } },
	{ slot: 2, type: { url: '', name: 'flying' } },
];

describe('PokemonTypes', () => {
	it('should render the types correctly', () => {
		render(<PokemonTypes types={mockTypes} />);

		expect(screen.getByText('Fogo')).toBeInTheDocument();
		expect(screen.getByText('Voador')).toBeInTheDocument();

		const fireIcon = screen
			.getByText('Fogo')
			?.closest('div')
			?.querySelector('span');
		const flyingIcon = screen
			.getByText('Voador')
			?.closest('div')
			?.querySelector('span');

		expect(fireIcon).toBeInTheDocument();
		expect(flyingIcon).toBeInTheDocument();
	});

	it('should apply the correct class for each type', () => {
		render(<PokemonTypes types={mockTypes} />);

		const fireTypeDiv = screen.getByText('Fogo').closest('div');
		const flyingTypeDiv = screen.getByText('Voador').closest('div');

		expect(fireTypeDiv).toHaveClass('bg-fire');
		expect(flyingTypeDiv).toHaveClass('bg-flying');
	});
});
