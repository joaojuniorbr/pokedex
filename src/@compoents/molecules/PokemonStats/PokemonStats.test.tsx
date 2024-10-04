import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PokemonStats } from './PokemonStats';
import { mockStats } from 'mocks';

const MockValues = [
	{
		name: 'HP',
		value: 50,
		maxValue: 255,
	},
	{
		name: 'Ataque',
		value: 100,
		maxValue: 190,
	},
	{
		name: 'Defesa',
		value: 75,
		maxValue: 230,
	},
	{
		name: 'Ataque Especial',
		value: 120,
		maxValue: 180,
	},
	{
		name: 'Defesa Especial',
		value: 90,
		maxValue: 230,
	},
	{
		name: 'Velocidade',
		value: 80,
		maxValue: 180,
	},
];

describe('PokemonStats Component', () => {
	it('should render the stats table correctly', () => {
		render(<PokemonStats stats={mockStats} type='fire' />);

		MockValues.forEach((item) => {
			const stat = screen.getByText(item.name);
			expect(stat).toBeInTheDocument();
		});

		MockValues.forEach((item) => {
			const stat = screen.getByText(item.value.toString());
			expect(stat).toBeInTheDocument();
		});
	});

	it('should display the correct percentage widths for stats', () => {
		render(<PokemonStats stats={mockStats} type='fire' />);

		MockValues.forEach((item) => {
			const statRow = screen.getByText(item.name).closest('tr');
			const statBar = statRow?.querySelector('div:last-child > div');
			expect(statBar).toHaveStyle(
				`width: ${((item.value / item.maxValue) * 100).toFixed(2)}%`
			);
		});
	});
});
