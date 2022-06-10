import { render, screen } from 'src/@test';
import { composeStories } from '@storybook/testing-react';
import * as stories from './PokemonCard.stories';

jest.mock('src/@hooks', () => ({
	...jest.requireActual('src/@hooks'),
	usePokemon: () => ({
		results: {
			types: [
				{
					slot: 1,
					type: { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
				},
				{
					slot: 2,
					type: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
				},
			],
			weight: 18,
		},
	}),
}));

const { Sample } = composeStories(stories);

describe('<PokemonCard />', () => {
	test('Mostrar o nome do Pokemon', () => {
		render(<Sample />);

		const Name = screen.queryByText('pidgey');
		expect(Name).toBeInTheDocument();
	});
});
