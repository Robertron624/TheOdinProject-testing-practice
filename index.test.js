const functions = require('./index')

describe('capitalize', () => {
    test('capitalize first letter of string', () => {
        expect(functions.capitalize('hello')).toBe('Hello')
    })

    test('capitalize first letter of string', () => {
        expect(functions.capitalize('world')).toBe('World')
    })

    test('return empty string', () => {
        expect(functions.capitalize('')).toBe('')
    })

    test('throw error if input is not a string', () => {
        expect(() => functions.capitalize(1)).toThrow('Input must be a string')
    })
})

describe('reverseString', () => {
    test('reverse string', () => {
        expect(functions.reverseString('hello')).toBe('olleh')
    })

    test('reverse string', () => {
        expect(functions.reverseString('world')).toBe('dlrow')
    })

    test('return empty string', () => {
        expect(functions.reverseString('')).toBe('')
    })

    test('throw error if input is not a string', () => {
        expect(() => functions.reverseString(1)).toThrow('Input must be a string')
    })
})