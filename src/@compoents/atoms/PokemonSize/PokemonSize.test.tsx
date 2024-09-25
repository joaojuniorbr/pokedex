import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PokemonSize } from './PokemonSize';

describe('PokemonSize', () => {
	it('should render icon, value, and label correctly', () => {
		const props = {
			icon: 'ri-weight-scale',
			value: '60 kg',
			label: 'weight',
		};

		render(<PokemonSize {...props} />);

		const iconElement = screen.getByTestId(props.icon);
		expect(iconElement).toHaveClass(props.icon);

		const valueElement = screen.getByText(props.value);
		expect(valueElement).toBeInTheDocument();
		expect(valueElement).toHaveClass('text-xl font-bold');

		const labelElement = screen.getByText(props.label);
		expect(labelElement).toBeInTheDocument();
		expect(labelElement).toHaveClass('text-xs');
	});
});
