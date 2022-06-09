import React from 'react';
import { RenderOptions, render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

import { MemoryRouter } from 'react-router-dom';

const Providers: React.FC = ({ children }: React.PropsWithChildren<{}>) => (
	<MemoryRouter>{children}</MemoryRouter>
);

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
