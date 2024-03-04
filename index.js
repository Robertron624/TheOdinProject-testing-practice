// Group of functions to be tested

function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  return string.split("").reverse().join("");
}

const calculator = {
  // throw an error if any of the inputs is not a number

  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input must be a number");
    }
    return a + b;
  },

  subtract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input must be a number");
    }
    return a - b;
  },

  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input must be a number");
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },

  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input must be a number");
    }
    return a * b;
  },
};

function caesarCipher(string, shift) {

    if (typeof string !== "string") {
        throw new Error("Input must be a string");
    }

    if (typeof shift !== "number") {
        throw new Error("Shift value must be a number");
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftValue = shift % 26;
    const punctuation = ".,?!@#$%^&*()_+-=[]{}|;':\"<>/\\";
    let result = "";

    function shiftLetter(letter, alphabet) {
        const index = alphabet.indexOf(letter);
        const newIndex = (index + shiftValue) % 26;
        return alphabet[newIndex];
    }

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (alphabet.includes(letter)) {
            result += shiftLetter(letter, alphabet);
        } else if (upperAlphabet.includes(letter)) {
            result += shiftLetter(letter, upperAlphabet);
        } else if (punctuation.includes(letter)) {
            result += letter;
        } else if (letter === " ") {
            result += " ";
        }
    }

    return result;
}

function analyzeArray(array) {
  // throw an error if input is not an array
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  // throw an error if array is empty
  if (array.length === 0) {
    throw new Error("Array must not be empty");
  }

  // throw an error if any of the elements is not a number
  if (array.some((element) => typeof element !== "number")) {
    throw new Error("Array must contain only numbers");
  }

  // return the analysis object

  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

// exporting the functions to be tested

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
