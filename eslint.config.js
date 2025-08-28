// eslint.config.js
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ignorePath = path.join(__dirname, '.eslintignore');

export default [
  includeIgnoreFile(ignorePath),
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
];