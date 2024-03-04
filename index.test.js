const functions = require('./index')

test('capitalize string', () => {
    expect(functions.capitalize('hello')).toBe('Hello')
})