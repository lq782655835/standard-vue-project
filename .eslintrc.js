module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['plugin:vue/essential'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'arrow-parens': 'off', // allow paren-less arrow functions

        'generator-star-spacing': 'off', // allow async-await

        'no-unused-vars': 'error', // disabled no ununsed var

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // no use debugger in production

        'indent': [2, 4, { SwitchCase: 1 }], // 4 space for tab for perttier

        'space-before-function-paren': ['error', 'never'], // no space in function name for perttier
    }
}
