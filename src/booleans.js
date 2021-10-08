const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  if (a && b === true) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  // your code here
  if (a || b === true) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  // your code here
  if (a === false && b === false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  // your code here
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  // your code here
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  // your code here
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  // your code here
  if (a % 2 > 0) {
    return true;
  }
  return false;
};

const isEven = a => {
  // your code here
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  // your code here
  const checkSquare = Math.sqrt(a) % 1 === 0;
  return checkSquare;
};

const startsWith = (char, string) => {
  // your code here
  if (char === string.charAt(0)) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  // your code here
  // created vowels array, checked string letters in for loop to see if it is included in vowels array
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let x = 0; x < string.length; x++) {
    if (vowels.includes(string[x].toLowerCase())) {
      return true;
    }
  }
  return false;
};

const isLowerCase = string => {
  // your code here
  if (string.charAt(0) === string.charAt(0).toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
