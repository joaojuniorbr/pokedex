const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require('vite-plugin-svgr').default;

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-jest',
		'storybook-addon-performance',
		'@storybook/addon-a11y',
	],
	features: {
		interactionsDebugger: true,
	},
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	viteFinal: async (config) => {
		config.plugins.push(tsconfigPaths());

		config.plugins.push(svgr());

		config.resolve = {
			...config.resolve,
			alias: {
				...config.resolve.alias,
				path: require.resolve('path-browserify'),
				crypto: require.resolve('crypto-browserify'),
				stream: require.resolve('stream-browserify'),
			},
		};

		return config;
	},
};
