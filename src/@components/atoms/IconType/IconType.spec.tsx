import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './IconType.stories';

const { Sample } = composeStories(stories);

describe('<IconType />', () => {
	test('Mostre o ícone do tipo inseto (bug)', () => {
		render(<Sample name='bug' />);

		const BugIcon = screen.queryByText('bug');

		expect(BugIcon).toBeInTheDocument();
	});

	test('Mostre apenas o ícone do tipo inseto (bug)', () => {
		render(<Sample name='bug' size='icon' />);

		const LabelBugIcon = screen.queryByText('bug');

		expect(LabelBugIcon).not.toBeInTheDocument();
	});
});
