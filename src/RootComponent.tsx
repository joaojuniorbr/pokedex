import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider, App as AppAnt } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient();

console.log({ ENVS: import.meta.env });

const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<ConfigProvider
			locale={pt_BR}
			theme={{
				token: {
					colorPrimary: '#000',
				},
			}}
		>
			<Auth0Provider
				domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
				clientId={import.meta.env.VITE_APP_AUTH0_CLIENTID}
				authorizationParams={{ redirect_uri: window.location.origin }}
			>
				<AppAnt>
					<BrowserRouter>{children}</BrowserRouter>
				</AppAnt>
			</Auth0Provider>
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
