module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    // Add or customize rules based on your preferences and requirements
    'react/jsx-uses-react': 'off', // Not needed with React 17+
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/prop-types': 'off', // Disable prop-types since we use TypeScript's static types
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types for functions
    '@typescript-eslint/no-explicit-any': 'off', // Allow the use of 'any' type
    'react-hooks/rules-of-hooks': 'error', // Ensure hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn', // Check for missing dependencies in useEffect
    'jsx-a11y/anchor-is-valid': 'off', // Disable the anchor is valid rule for Next.js or Gatsby
    'jsx-a11y/label-has-associated-control': 'off', // Disable the label-has-associated-control rule for accessibility
    // Additional rules or overrides as needed
  },
};
