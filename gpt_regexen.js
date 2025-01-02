import { assertFalse, assert } from "jsr:@std/assert";

// Assignment 1: Matching Specific Words
const specificWord = /\bcat\b/;

Deno.test("Testing cat in word", () => {
  assert(specificWord.test("The cat is on the roof."));
  assert(specificWord.test("cat is on the roof."));
  assert(specificWord.test("Akshay is on the cat."));
  assert(specificWord.test("There is a     cat on the wall."));
  assert(specificWord.test("Akshay is on the cat-"));
  assert(specificWord.test("Akshay is on the cat"));
});

Deno.test("Testing cat not in word", () => {
  assertFalse(specificWord.test("Akshay is on the cat_"));
  assertFalse(specificWord.test("Akshay is on the caten"));
  assertFalse(specificWord.test("I love category theory."));
});

// Assignment 2: Matching Digits in a String
const digitsInWord = /[0-9]+/;

Deno.test("Testing digits in word", () => {
  assert(digitsInWord.test("There are 3 cats in the house."));
  assert(digitsInWord.test("There are 30 cats in the house."));
  assert(digitsInWord.test("-30 is a negative number"));
});

Deno.test("Testing digits not in word", () => {
  assertFalse(digitsInWord.test("No digits here!"));
});
