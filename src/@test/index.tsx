import React, { ReactElement } from 'react';

import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { RenderOptions, render, RenderResult } from '@testing-library/react';

import { QueryClient } from 'src/@services';

const Providers: React.FC = ({ children }: React.PropsWithChildren<{}>) => (
	<QueryClientProvider client={QueryClient}>
		<MemoryRouter>{children}</MemoryRouter>
	</QueryClientProvider>
);

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render, Providers };
