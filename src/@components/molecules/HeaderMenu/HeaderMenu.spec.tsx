const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: mockedUsedNavigate,
}));

import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HeaderMenu.stories';

const { Sample } = composeStories(stories);

describe('<HeaderMenu />', () => {
	test('Ir para Home', () => {
		render(
			<Router>
				<Sample />
			</Router>
		);

		const HomeButton = screen.queryByLabelText('Home');

		userEvent.click(HomeButton!);

		expect(HomeButton).toBeInTheDocument();

		expect(mockedUsedNavigate).toBeCalled();
	});

	test('Ir para Filtros', () => {
		render(
			<Router>
				<Sample />
			</Router>
		);

		const FiltersButton = screen.queryByLabelText('Filtros');

		userEvent.click(FiltersButton!);

		expect(FiltersButton).toBeInTheDocument();

		expect(mockedUsedNavigate).toBeCalled();
	});

	test('Ir para Configurações', () => {
		render(
			<Router>
				<Sample />
			</Router>
		);

		const SettingsButton = screen.queryByLabelText('Configurações');

		userEvent.click(SettingsButton!);

		expect(SettingsButton).toBeInTheDocument();
	});
});
