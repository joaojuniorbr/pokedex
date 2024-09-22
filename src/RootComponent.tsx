import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider, App as AppAnt } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR';

import App from './App';

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<ConfigProvider
			locale={pt_BR}
			theme={{
				token: {
					colorPrimary: '#dc0a2d',
				},
			}}
		>
			<AppAnt>
				<BrowserRouter>{children}</BrowserRouter>
			</AppAnt>
		</ConfigProvider>
	</QueryClientProvider>
);

export const RootComponent = () => (
	<StrictMode>
		<AppProviders>
			<App />
		</AppProviders>
	</StrictMode>
);
