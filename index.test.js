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

describe('calculator object', () => {
    
    test('add two numbers', () => {
        expect(functions.calculator.add(1, 2)).toBe(3)
    })

    test('subtract two numbers', () => {
        expect(functions.calculator.subtract(1, 2)).toBe(-1)
    })

    test('divide two numbers', () => {
        expect(functions.calculator.divide(1, 2)).toBe(0.5)
    })

    test('multiply two numbers', () => {
        expect(functions.calculator.multiply(1, 2)).toBe(2)
    })

    test('throw error if input is not a number', () => {
        expect(() => functions.calculator.add('1', 2)).toThrow('Input must be a number')
    })
});


describe('analyzeArray', () => {
    test('analyze array', () => {
        expect(functions.analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        })
    })

    test('analyze array', () => {
        expect(functions.analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
            average: 5.5,
            min: 1,
            max: 10,
            length: 10
        })
    })

    test('throw error if input is not an array', () => {
        expect(() => functions.analyzeArray('1, 2, 3, 4, 5')).toThrow('Input must be an array')
    })

    test('throw error if array contains non-number elements', () => {
        expect(() => functions.analyzeArray([1, 2, 3, '4', 5])).toThrow('Array must contain only numbers')
    })

    test('throw error if array is empty', () => {
        expect(() => functions.analyzeArray([])).toThrow('Array must not be empty')
    })
})

describe('caesarCipher', () => {

    test('shift string by 0', () => {
        expect(functions.caesarCipher('hello', 0)).toBe('hello')
    })

    test('shift string by 1', () => {
        expect(functions.caesarCipher('hello', 1)).toBe('ifmmp')
    })

    test('shift string by 1', () => {
        expect(functions.caesarCipher('world', 1)).toBe('xpsme')
    })

    test('shift string by 2', () => {
        expect(functions.caesarCipher('hello', 2)).toBe('jgnnq')
    })

    test('shift string by 3', () => {
        expect(functions.caesarCipher('hello',
        3)).toBe('khoor')
    })

    test('shift string with punctuation', () => {
        expect(functions.caesarCipher('hello, world!', 1)).toBe('ifmmp, xpsme!')
    })

    test('throw error if input is not a string', () => {
        expect(() => functions.caesarCipher(1, 1)).toThrow('Input must be a string')
    })

    test('throw error if shift is not a number', () => {
        expect(() => functions.caesarCipher('hello', '1')).toThrow('Shift value must be a number')
    })
})
