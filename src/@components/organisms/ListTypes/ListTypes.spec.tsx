import { render, screen } from 'src/@test';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ListTypes.stories';
import pokeapi from 'src/@test/__mocks__/pokeapi';

jest.mock('src/@hooks', () => ({
	...jest.requireActual('src/@hooks'),
	useTypes: () => ({
		results: pokeapi.types,
	}),
}));

const { Sample } = composeStories(stories);

describe('<ListTypes />', () => {
	test('Quantidade de tipos mostrados', () => {
		render(<Sample />);

		const ITEM_RESULTS = 20;

		const items = screen.getAllByRole('listitem');
		expect(items.length).toBe(ITEM_RESULTS);
	});

	test('Mostrar o tipo de pokemon Normal', () => {
		render(<Sample />);

		const NormalType = screen.queryByText('normal');
		expect(NormalType).toBeInTheDocument();
	});
});
