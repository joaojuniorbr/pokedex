import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { withPerformance } from 'storybook-addon-performance';

import results from '../.jest-test-results.json';

import { globalStyles, styled } from '../src/@common/ui';

addDecorator(withPerformance);

const Layout = styled('main', {
	background: '$light',
	borderRadius: '8px',
	boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
	margin: '0 auto',
	padding: '$5',
	width: '80%',
});

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	withTests({
		results,
		filesExt: '((\\.spec?)|(\\.test?))?(\\.tsx)?$',
	}),
	(Story) => {
		globalStyles();

		return (
			<BrowserRouter>
				<Layout>
					<Story />
				</Layout>
			</BrowserRouter>
		);
	},
];
