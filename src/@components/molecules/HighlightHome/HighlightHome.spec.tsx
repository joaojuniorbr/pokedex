import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HighlightHome.stories';

const { Sample } = composeStories(stories);

describe('<HighlightHome />', () => {
	test('Render do Título', () => {
		render(<Sample />);

		const Title = screen.queryByText('Sample Text');
		expect(Title).toBeInTheDocument();
	});

	test('Render do Texto', async () => {
		render(<Sample text='Description Text' />);

		const Description = await screen.queryByText('Description Text');
		expect(Description).toBeInTheDocument();
	});
});
