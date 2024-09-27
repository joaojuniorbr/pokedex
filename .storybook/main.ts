import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-docs',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	babel: async (options) => {
		options.presets.push('@babel/preset-react', { runtime: 'automatic' });
		return options;
	},
	viteFinal: (config) => {
		return {
			...config,
			esbuild: {
				jsxInject: `import React from 'react'`,
			},
		};
	},
};
export default config;
