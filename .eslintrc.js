module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // Enables ESLint to format with Prettier
    ],
    parserOptions: {
      ecmaVersion: 2021, // or the version of ECMAScript you are using
    },
    rules: {
      // General rules
      'no-console': 'off', // Allowing console statements in serverless functions
      'no-unused-vars': ['error', { argsIgnorePattern: '^event|context|callback' }], // Allowing unused 'event', 'context', and 'callback' parameters
  
      // Rules for imports and modules
      'import/extensions': ['error', 'always', {
        js: 'never',
        ts: 'never',
      }],
      'import/prefer-default-export': 'off',
  
      // Other rules as per your preference
    },
    plugins: [
      
      // Add any additional plugins here if required
    ],
  };
  