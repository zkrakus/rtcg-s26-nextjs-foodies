import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: false })

export default [
  // Next.js core-web-vitals
  ...compat.extends('next/core-web-vitals'),

  // React recommended
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ),

  // React-Refresh plugin
  {
    plugins: { 'react-refresh': await import('eslint-plugin-react-refresh') },
  },

  // your rules, env, settings, ignores
  {
    ignores: ['dist'],
    env: { browser: true, es2020: true },
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: "detect" } },
    rules: {
      'react-refresh/only-export-components': ['warn',{ allowConstantExport: true }],
      'react/prop-types': 'off'
    },
    overrides: [
      {
        files: ['.eslintrc.js'],
        env: { node: true },
        parserOptions: { sourceType: 'script' }
      }
    ]
  }
]