//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  sentence = sentence.replace(/[^a-zA-Z]/g, "");

  let letters = new Set(sentence.toLowerCase().split(""));

  return (letters.size === 26);
};
