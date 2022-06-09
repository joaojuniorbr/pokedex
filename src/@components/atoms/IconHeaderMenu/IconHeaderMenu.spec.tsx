import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from 'src/@test';

import { composeStories } from '@storybook/testing-react';

import * as stories from './IconHeaderMenu.stories';

const { Sample } = composeStories(stories);

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('<IconHeaderMenu />', () => {
	test('Click do ícone', async () => {
		render(<Sample item={{ name: 'sample', url: '/sample', icon: 'icon' }} />);

		const IconButton = screen.queryByLabelText('sample');

		userEvent.click(IconButton!);

		await waitFor(async () => {
			expect(IconButton).toBeInTheDocument();

			expect(mockedUsedNavigate).toBeCalledWith('/sample');
		});
	});
});
