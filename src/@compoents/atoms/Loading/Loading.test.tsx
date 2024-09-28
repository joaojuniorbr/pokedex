import { render, screen } from '@testing-library/react';
import { Loading } from './Loading'; // Altere o caminho conforme necessário
import { describe, expect, it } from 'vitest';

describe('Loading component', () => {
	it('should render without crashing', () => {
		render(<Loading />);

		const loadingElement = screen.getByTestId('loading');
		expect(loadingElement).toBeInTheDocument();
	});

	it('should have the correct class name', () => {
		render(<Loading className='custom-class' />);

		const loadingElement = screen.getByTestId('loading');
		expect(loadingElement).toHaveClass('loading-pokemon custom-class');
	});
});
