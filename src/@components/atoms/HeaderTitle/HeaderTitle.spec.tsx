import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'src/@test';

import { composeStories } from '@storybook/testing-react';

import * as stories from './HeaderTitle.stories';

const { Sample } = composeStories(stories);

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('<HeaderTitle />', () => {
	test('Click do botão de voltar', async () => {
		render(<Sample />);

		const ACTION_BACK_NAVIGATE = -1;

		const Button = screen.queryByLabelText('Voltar');

		userEvent.click(Button!);

		await waitFor(async () => {
			expect(Button).toBeInTheDocument();

			expect(mockedUsedNavigate).toBeCalledWith(ACTION_BACK_NAVIGATE);
		});
	});
});
