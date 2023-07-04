module.exports = {
  extends: ['@handsin/eslint-config/javascript'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts'],
      extends: ['@handsin/eslint-config/typescript'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['*.tsx'],
      extends: ['@handsin/eslint-config/react/typescript'],
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
