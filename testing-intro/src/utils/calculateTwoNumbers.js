/**
 * Napisz funckje która przyjmie 3 parametery
 * pierwsze 2 parametry będą liczbami które chcemy przeliczyć na podstawie 3 parametru
 * który będzie znakiem: + - / *
 * niech funckja calculateTwoNumbers wykorzysta istniejące funckje liczące
 * tj.
 * addTwoNumbers
 * subtractTwoNumbers
 * multiplyTwoNumbers
 * divideTwoNumbers
 *
 *
 */

import { addTwoNumbers } from "./addTwoNumbers";
import { divideTwoNumbers } from "./divideTwoNumbers";
import { multiplyTwoNumbers } from "./multiplyTwoNumbers";
import { subtractTwoNumbers } from "./subtractTwoNumbers";

export const calculateTwoNumbers = function (num1, num2, sign) {
  if (sign === "+") return addTwoNumbers(num1, num2);
  if (sign === "-") return subtractTwoNumbers(num1, num2);
  if (sign === "/") return divideTwoNumbers(num1, num2);
  if (sign === "*") return multiplyTwoNumbers(num1, num2);
};
