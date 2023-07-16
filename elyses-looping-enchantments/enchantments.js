// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let counter = 0;
  stack.forEach((cardS) => {
    if (cardS === card) {
      counter++;
    }
  });
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const EVEN = type;
  let counter = 0;

  for (const card of stack) {
    if (EVEN) {
      if (card % 2 === 0) {
        counter++;
      }
      continue;
    }
    if (card % 2 !== 0) {
      counter++;
    }
  }
  return counter
}
