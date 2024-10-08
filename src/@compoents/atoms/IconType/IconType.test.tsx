import { render, screen } from '@testing-library/react';
import { IconType } from './IconType';
import { describe, expect, it } from 'vitest';

describe('IconType Component', () => {
	it('should render the correct icon for a given type', () => {
		const { container } = render(<IconType name='bug' />);
		expect(container.querySelector('svg')).toBeInTheDocument();
	});

	it('should render a label when isLabel is true', () => {
		render(<IconType name='fire' isLabel />);
		expect(screen.getByText('Fogo')).toBeInTheDocument();
	});

	it('should apply solid style when custom style is solid', () => {
		const { container } = render(
			<IconType name='water' isLabel variant='solid' />
		);
		expect(container.firstChild).toHaveClass('bg-water');
	});

	it('should apply outline style when custom style is outline', () => {
		const { container } = render(
			<IconType name='water' variant='outline' isLabel />
		);
		expect(container.firstChild).toHaveClass('color-water');
	});
});
