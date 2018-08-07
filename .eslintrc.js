module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  rules: {
    'standard/computed-property-even-spacing': [0, 'even'],
    'handle-callback-err': 0,
    // 禁用标签语句
    'no-labels': 0,
    // 函数名前空格
    'space-before-function-paren': [0, 'always'],
    // 文件末尾强制换行
    'eol-last': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    "comma-dangle": ["error", "never"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
 }
}
