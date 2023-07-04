module.exports = {
  extends: ['@handsin/eslint-config/javascript'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['@handsin/eslint-config/typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      extends: ['@handsin/eslint-config/react/typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.jsx'],
      extends: ['@handsin/eslint-config/react/javascript'],
    },
  ],
};
