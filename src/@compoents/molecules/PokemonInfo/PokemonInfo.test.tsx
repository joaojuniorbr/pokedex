// PokemonInfo.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PokemonInfo } from './PokemonInfo';

describe('PokemonInfo Component', () => {
	it('should render weight and height correctly', () => {
		const props = { weight: 60, height: 1.5 };

		render(<PokemonInfo {...props} />);

		expect(screen.getByText('Peso')).toBeInTheDocument();
		expect(screen.getByText('60 kg')).toBeInTheDocument();

		expect(screen.getByText('Altura')).toBeInTheDocument();
		expect(screen.getByText('15 cm')).toBeInTheDocument();
	});
});
