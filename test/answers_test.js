import { assert, assertFalse, assertEquals } from "jsr:@std/assert";
import * as utility from "../src/answers.js";

Deno.test("Test for matching Digits", () => {
  assert(utility.matchDigit("1234"));
  assert(utility.matchDigit("My age is 34"));
  assert(utility.matchDigit("My email is faded123@gmail.com"));
  assertFalse(utility.matchDigit("My name is Lahare"));
});

Deno.test("Test for finding all lowercase letters", () => {
  assertEquals(utility.findLowerCase("is this lowercase?"), [
    "is",
    "this",
    "lowercase",
  ]);
  assertEquals(utility.findLowerCase("There is Uppercase"), [
    "here",
    "is",
    "ppercase",
  ]);
});

Deno.test("Test for string ending with ed", () => {
  assert(utility.endsWithEd("faded"));
  assertFalse(utility.endsWithEd("faded black"));
  assertFalse(utility.endsWithEd("black"));
});

Deno.test("Testing for yes in string", () => {
  assert(utility.matchYes("yes it should work"));
  assertFalse(utility.matchYes("it should work"));
  assertFalse(utility.matchYes("it shouldyes work"));
  assert(utility.matchYes("it should work yes."));
});

Deno.test("Testing consecutive vowels", () => {
  assertEquals(utility.consecutiveVowel("aathere"), ["aa"]);
  assertFalse(utility.consecutiveVowel("there"));
});

Deno.test("Test for string containing hello", () => {
  assert(utility.containsHello("this contains hello"));
  assert(utility.containsHello("this containshello in word"));
  assertFalse(utility.containsHello("this doesn't contain"));
});

Deno.test("Test for string containing exactly two spaces", () => {
  assert(utility.twoSpaces("hello there "));
  assert(utility.twoSpaces("hello  there"));
  assertFalse(utility.twoSpaces("hello   there"));
  assert(utility.twoSpaces("hello there are more than 2 spaces here"));
});

Deno.test("Test for string starting with abc", () => {
  assertEquals(utility.beginWithABC("abc"), ["abc"]);
  assertEquals(utility.beginWithABC("abchello"), ["abchello"]);
  assertEquals(utility.beginWithABC("failing test"), null);
  assertEquals(utility.beginWithABC("here abc is in middle of theabc"), null);
});

Deno.test("Test for string containing 7", () => {
  assert(utility.stringWith7("contains 7"));
  assert(utility.stringWith7("contains7 in word"));
  assert(utility.stringWith7("contains7in the middle of word"));
  assertFalse(utility.stringWith7("doesn't contain number"));
});

Deno.test("Test for string containing E in them", () => {
  assertEquals(utility.containsE("this is e"), ["e"]);
  assertEquals(utility.containsE("there are three E's"), [
    "there",
    "are",
    "three",
    "E's",
  ]);
});

Deno.test("Test for string with atleast one uppercase", () => {
  assert(utility.atleastOneUppercase("There is one uppercase"));
  assertFalse(utility.atleastOneUppercase("here is no uppercase"));
  assert(utility.atleastOneUppercase("there is Uppercase"));
});

Deno.test("Test for string with period", () => {
  assertEquals(utility.stringWithPeriod("This is a period."), [
    "This is a period.",
  ]);
  assertEquals(utility.stringWithPeriod("This is no period"), null);
  assertEquals(utility.stringWithPeriod("."), ["."]);
});

Deno.test("Test for single space string", () => {
  assert(utility.singleSpace("single space"));
  assertFalse(utility.singleSpace("not a single space"));
  assertFalse(utility.singleSpace("not  space"));
});

Deno.test("Test for words starting with c", () => {
  assertEquals(utility.beginWithC("c"), ["c"]);
  assertEquals(utility.beginWithC("cook"), ["cook"]);
  assertEquals(utility.beginWithC("cook in the kitchen, cooks food"), [
    "cook",
    "cooks",
  ]);
});

Deno.test();
