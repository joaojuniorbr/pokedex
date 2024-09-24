import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'istanbul',
			include: ['src/**/*.{js,ts,jsx,tsx}'],
			exclude: ['src/index.ts'],
			reporter: ['text', 'json', 'html'],
		},
		setupFiles: './src/setupTests.ts',
	},
});
