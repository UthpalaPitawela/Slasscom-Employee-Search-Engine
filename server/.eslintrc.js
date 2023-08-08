module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended', // Make sure this line is included
  ],
  parser: '@typescript-eslint/parser', // Specify the parser for TypeScript
  parserOptions: {
    ecmaVersion: 2021, // or the version of ECMAScript you are using
    sourceType: 'module',
    project: './tsconfig.json', // Path to your TypeScript configuration file
  },
  rules: {
     // General rules
     'no-console': 'off', // Allowing console statements in serverless functions
     'no-unused-vars': 'off', // We let TypeScript handle this
 
     // Rules for imports and modules
     'import/extensions': ['error', 'always', {
       js: 'never',
       ts: 'never',
     }],
     'import/prefer-default-export': 'off',
 
     // Other rules as per your preference
   },
   plugins: [
     '@typescript-eslint', // Add the '@typescript-eslint' plugin here
     'prettier', // Add the 'prettier' plugin here
     // Add any additional plugins here if required
   ],

};
