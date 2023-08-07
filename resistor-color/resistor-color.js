//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { X509Certificate } from "crypto";

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
export const colorCode = (color) => {

  if(color === 'colors') return COLORS
  return COLORS.indexOf(color);
  
};
