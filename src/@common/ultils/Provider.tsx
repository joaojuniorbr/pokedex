import React from 'react';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'src/@services';

export const Provider: React.FC = ({
	children,
}: React.PropsWithChildren<{}>) => (
	<QueryClientProvider client={QueryClient}>{children}</QueryClientProvider>
);
