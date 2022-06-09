import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Typography.stories';

const { Sample } = composeStories(stories);

describe('<Typography />', () => {
	test('Render do Texto', () => {
		render(<Sample>Sample Text</Sample>);

		const Text = screen.queryByText('Sample Text');
		expect(Text).toBeInTheDocument();
	});
});
