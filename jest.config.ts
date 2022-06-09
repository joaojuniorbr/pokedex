export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(gif|ttf|eot|png)$': '<rootDir>/src/@test/__mocks__/fileMock.js',
		'\\.svg': '<rootDir>/src/@test/__mocks__/svg.tsx',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'src/(.*)': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/src/@test/jest.setup.ts'],
	moduleDirectories: ['node_modules', 'src'],
	modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
};
