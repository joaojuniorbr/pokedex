import React from 'react';

import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';

import '../src/@styles/main.scss';
import { ConfigProvider, App } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<QueryClientProvider client={queryClient}>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#000',
						},
					}}
				>
					<App>
						<BrowserRouter>
							<Story />
						</BrowserRouter>
					</App>
				</ConfigProvider>
			</QueryClientProvider>
		),
	],
};

export default preview;
