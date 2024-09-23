import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IconType } from './IconType';

export interface IconProps {
	style?: React.CSSProperties;
}

vi.mock('@assets/types', () => ({
	Bug: (props: IconProps) => <div data-testid='bug-icon' {...props} />,
	Dark: (props: IconProps) => <div data-testid='dark-icon' {...props} />,
	Dragon: (props: IconProps) => <div data-testid='dragon-icon' {...props} />,
	Electric: (props: IconProps) => (
		<div data-testid='electric-icon' {...props} />
	),
	Fairy: (props: IconProps) => <div data-testid='fairy-icon' {...props} />,
	Fighting: (props: IconProps) => (
		<div data-testid='fighting-icon' {...props} />
	),
	Fire: (props: IconProps) => <div data-testid='fire-icon' {...props} />,
	Flying: (props: IconProps) => <div data-testid='flying-icon' {...props} />,
	Ghost: (props: IconProps) => <div data-testid='ghost-icon' {...props} />,
	Grass: (props: IconProps) => <div data-testid='grass-icon' {...props} />,
	Normal: (props: IconProps) => <div data-testid='normal-icon' {...props} />,
	Ground: (props: IconProps) => <div data-testid='ground-icon' {...props} />,
	Ice: (props: IconProps) => <div data-testid='ice-icon' {...props} />,
	Poison: (props: IconProps) => <div data-testid='poison-icon' {...props} />,
	Psychic: (props: IconProps) => <div data-testid='psychic-icon' {...props} />,
	Rock: (props: IconProps) => <div data-testid='rock-icon' {...props} />,
	Steel: (props: IconProps) => <div data-testid='steel-icon' {...props} />,
	Water: (props: IconProps) => <div data-testid='water-icon' {...props} />,
}));

describe('IconType Component', () => {
	it('renders the correct icon for each type', () => {
		const types = [
			'bug',
			'dark',
			'dragon',
			'electric',
			'fairy',
			'fighting',
			'fire',
			'flying',
			'ghost',
			'grass',
			'normal',
			'ground',
			'ice',
			'poison',
			'psychic',
			'rock',
			'steel',
			'water',
		];

		types.forEach((type) => {
			render(<IconType name={type} />);
			const icon = screen.getByTestId(`${type}-icon`);
			expect(icon).toBeInTheDocument();
		});
	});
});
