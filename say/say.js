//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//
const NUMBERS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const SUFFIXES = ["", "thousand", "million", "billion"];

/**
 * Convert a number to numInWords
 * between 0 to 999,999,999,999
 *
 * @param {number} number - [TODO:description]
 * @throws {Error} - Number exceeds the limits
 * @returns {String} [TODO:description]
 */
export const say = (number) => {
  if (number < 0 || number > 999999999999) {
    throw new Error("Number must be between 0 and 999,999,999,999.");
  }
  if (number in NUMBERS) return NUMBERS[number];

  let numInWords = [];
  let numbers = splitNumber(number);

  for (let n of numbers) {
    numInWords.push(convertBase100(n));
  }

  let numSuffixes = numInWords.length;

  numInWords = numInWords.reduce((list, elem, i) => {
    if (elem !== "") {
      list.push(elem);
      if ((i + 1) % 1 === 0) list.push(SUFFIXES[numSuffixes - 1]);
    }
    numSuffixes--;
    return list;
  }, []);

  console.log(numInWords);
  return numInWords.join(" ").trim();
};

/**
 * Convert a number from 0 to 999
 *
 * @param {number} number - [TODO:description]
 * @returns {string} [TODO:description]
 */
function convertBase100(number) {
  let words = "";
  if (number === 0) return "";
  if (number in NUMBERS) return NUMBERS[number];

  if (number >= 100) {
    words += convertBase100(Math.floor(number / 100)) + " hundred ";
    number %= 100;
  }

  if (number > 0) {
    // if (words !== "") words += " and ";
    if (number < 20) words += NUMBERS[number];
    else {
      words += NUMBERS[Math.floor(number / 10) * 10];

      if (number % 10 > 0) {
        words += "-" + NUMBERS[number % 10];
      }
    }
  }

  return words;
}

/**
 * Splits a number into chunks of thousands
 *
 * @param {number} number - [TODO:description]
 * @returns {[number]} [TODO:description]
 */
function splitNumber(number) {
  const DIGITS = 3;
  let numbers = String(number).split("");
  let size = numbers.length;
  let counter = (size % DIGITS === 0)
    ? Math.floor(size / DIGITS)
    : Math.floor(size / DIGITS) + 1;
  let splited = [];

  for (let i = 1; i <= counter; i++) {
    splited.unshift(numbers.splice(-3, 3));
  }

  for (let index = 0; index < splited.length; index++) {
    const element = Number(splited[index].join(""));
    splited[index] = element;
  }
  return splited;
}
