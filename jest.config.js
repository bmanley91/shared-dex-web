module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts?(x)'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json'
        }
    },
    setupFiles: ['./jest.setup.js']
};