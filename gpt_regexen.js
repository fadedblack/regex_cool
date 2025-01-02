import { assertFalse, assert, assertEquals } from "jsr:@std/assert";

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

// Assignment 3: Matching All Digits in a String;
const allDigitInWord = /[0-9]+/g;

Deno.test("Testing digits in word", () => {
  assertEquals("I have 2 cats and 3 dogs.".match(allDigitInWord), ["2", "3"]);
});

// Assignment 4: Matching Specific Characters
const containsVowels = /[aeiou]/i;
const containsConsonents = /[^aeiou\d\s_]/g;

Deno.test("Testing words with vowels", () => {
  assert(containsVowels.test("Hello World!"));
  assert(containsConsonents.test("Ths strng hs n vwls."));
  assert(containsConsonents.test("Ths 234 kkj. , ; "));
});

Deno.test("Testing words with only consonents", () => {
  assertFalse(containsVowels.test("Ths strng hs n vwls."));
});

// Assignment 5: Matching Words That Start With a Consonant;
const startWithConsonent = /\b[^aeiou\d\s][a-zA-Z]+\b/g;

Deno.test("Testing Words That doesn't Start With a Consonant", () => {
  assert(startWithConsonent.test("banana cherry dog"));
});

Deno.test("Testing Words that start with a consonant", () => {
  assertFalse(startWithConsonent.test("apple banana 123 cherry dog"));
});
