import { RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

declare global {
	function renderWithQueryClient(ui: ReactElement): RenderResult;
}
