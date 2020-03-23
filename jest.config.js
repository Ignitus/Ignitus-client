module.exports = {
  jest: {
    verbose: true,
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.(css|scss|less)$': 'jest-css-modules',
    },
    transformIgnorePatterns: ['/node_modules/'],
    globals: {
      NODE_ENV: 'test',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['src'],
  },
};
