// Group of functions to be tested

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split("").reverse().join("")
    }

// exporting the functions to be tested

module.exports = {
    capitalize,
    reverseString
}