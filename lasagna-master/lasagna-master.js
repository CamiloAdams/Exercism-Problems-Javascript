/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return "You forgot to set the timer.";
  }
  if (remainingTime === 0) {
    return "Lasagna is done.";
  }
  return "Not done, please wait.";
}

/**
 * Calculates the preparationTime according to a number of layers
 *
 * @param {string[]} layers 
 * @param {number} [preparationTime=2] 
 *
 * return {number}
 */

export function preparationTime(layers, preparationTime = 2) {
  return layers.length * preparationTime;
}

/**
 * Calculates the quantities of noodles and sauce
 *
 * @param {string[]} layers
 * @returns {Record<string, number>} quantities
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === "noodles") {
      noodles += 50;
    }
    if (layers[index] === "sauce") {
      sauce += 0.2;
    }
  }
  return {
    noodles,
    sauce,
  };
}

/**
 * Add the secret ingredient to my ingredients list
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  let ingredient = friendsList[friendsList.length - 1];
  myList.push(ingredient);
}

/**
 * Compute cuantity of ingredients needed for a determinate portions
 *
 * @param {Record<string, number>} recipe
 * @param {number} portions
 *
 * @returns {Record<string, number>}
 */
export function scaleRecipe(recipe, portions) {
  let newRecipe = {};
  for (let ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }
  return newRecipe;
}
