module.exports = {
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended'
  ],
  globals: {
    document: true,
    window: true,
    process: true
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'arrow-body-style': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { multiline: true }
    }],
    'prefer-template': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': ['error', {
      selfClosing: 'after-props',
      nonEmpty: 'after-props'
    }],
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      children: true
    }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'off',
    'rest-spread-spacing': ['error', 'always']
  }
};
