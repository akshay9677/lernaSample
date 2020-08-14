module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/no-unused-components': 'off',
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/return-in-computed-property': 'off',
      'vue/no-side-effects-in-computed-properties': 'off',
      'vue/no-async-in-computed-properties': 'off',
      'vue/no-dupe-keys': 'off',
      'vue/require-v-for-key': 'off',
      'vue/no-parsing-error': [
        'error',
        { 'invalid-first-character-of-tag-name': false },
      ],
      'vue/valid-v-for': 'error',
      'vue/no-unused-vars': 'error',
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  }
  