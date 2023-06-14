module.exports = {
  root: true,
  extends: [
    '@thedaviddias/eslint-config/next.cjs',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended', // always at the end
  ],
  // overrides: [
  //   {
  //     files: '*.md{,x}',
  //     parser: 'eslint-mdx',
  //     processor: 'mdx/remark',
  //     plugins: ['mdx'],
  //     rules: {
  //       'mdx/remark': 'error',
  //     },
  //     parserOptions: {
  //       ecmaVersion: 13,
  //       sourceType: 'module',
  //     },
  //   },
  // ],
  rules: {
    'no-console': ['error'],
    'react/jsx-no-undef': ['off', { allowGlobals: true }],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
