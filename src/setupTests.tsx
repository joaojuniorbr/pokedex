import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

globalThis.renderWithQueryClient = (ui: React.ReactElement) => {
	return render(
		<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
	);
};
