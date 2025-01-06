// ### **Type 2: Task**

// 1. Match any string that contains a number.
export const matchDigit = (string) => /\d+/g.test(string);

// 2. Find all lowercase letters in a string.
export const findLowerCase = (string) => string.match(/[a-z]+/g);

// 3. Match a string that ends with "ed".
export const endsWithEd = (string) => /ed$/g.test(string);

// 4. Match the word "yes" in a string.
export const matchYes = (string) => /\byes\b/g.test(string);

// 5. Find any two consecutive vowels in a string.
export const consecutiveVowel = (string) => string.match(/([aeiou])\1/g);

// 6. Match any string containing the word "hello".
export const containsHello = (string) => /hello/g.test(string);

// 7. Find a string that contains exactly two spaces.
export const twoSpaces = (string) => /^(\S*\s)(\S*\s\S*)$/g.test(string);

// 8. Find a string that starts with "abc".
export const beginWithABC = (string) => string.match(/^abc.*$/g);

// 9. Match any string that contains the digit `7`.
export const stringWith7 = (string) => /7.*/g.test(string);

// 10. Find all occurrences of the letter `e`.
export const containsE = (string) => string.match(/\S*e\S*/gi);

// 11. Match a string that has at least one uppercase letter.
export const atleastOneUppercase = (string) => /[A-Z]/g.test(string);

// 12. Find a string with a period (`.`) in it.
export const stringWithPeriod = (string) => string.match(/.*\..*/g);

// 13. Match a string that contains a single space.
export const singleSpace = (string) => /^\S*\s\S*$/g.test(string);

// 14. Match all words that start with the letter `c`.
export const beginWithC = (string) => string.match(/\bc\S*\b/g);

// 15. Match a string that contains the sequence "123".
export const containing123 = (string) => /.*123/.test(string);

// 16. Match a string that contains a forward slash (`/`).
export const containsForwardSlash = (string) => /\//.test(string);

// 17. Find all strings that contain "and".
export const containsAnd = (string) => string.match(/and/g);

// 18. Match a string that starts and ends with the same letter.
export const startAndEndWithSameLetter = (string) => /(^).*\1$/.test(string);

// 19. Match all lowercase letters except "x" and "y".
export const lowercaseExceptXandY = (string) => /^[^A-Zxy]+$/g.test(string);

// 20. Find all words in a string that are exactly 5 letters long.
export const wordOfLength5 = (string) => string.match(/\b(\w){5}\b/g);

// 21. Match all words starting with a vowel.
export const startingWithVowel = (string) => /\b^[aeiou]\w+\b/i.test(string);

// 22. Find all sequences of two or more consecutive digits.
export const consecutiveDigits = (string) => string.match(/\b\w*\d+{2,}\w*\b/g);

// 23. Match all words that contain exactly three letters.
export const contains3Letters = (string) => /\b(\w){3}\b/.test(string);

// 24. Find all occurrences of the word "cat" or "dog".
export const catOrDog = (string) => string.match(/\bcat\b|\bdog\b/g);

// 25. Capture the first and last name from a string like `"John Doe"`.
export const firstAndLast = (string) =>
  string.match(/^(\b\w+\b)\s+\w*\s*(\b\w+\b)$/);

// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
export const matchingChars = (string) => /(\w)\1+/.test(string);

// 27. Extract all the hashtags from a tweet.
export const exortHashtag = (string) => string.match(/^#(\w*)$/g);

// 28. Validate a 24-hour time format like `"23:59"`.
// export const validateTime = (string) =>
// /^(2(?=[0-4]))|([0,1][0-9]):[0-5][0-9]/.test(string);

// 29. Capture the area code and phone number from `(123) 456-7890`.
export const codeAndPhone = (string) =>
  string.match(/\((\d+){3}\s(\d+{3}-\d{4})/);

// 30. Find sequences of whitespace followed by a word.
// 31. Match strings containing at least one uppercase and one digit.
// 32. Find all non-alphanumeric characters in a string.
// 33. Match email addresses.
// 34. Validate dates in the format `YYYY-MM-DD`.
// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
// 36. Find all duplicate words in a sentence.
// 37. Match words that do not contain the letter "e".
// 38. Extract the domain name from a URL like `https://www.example.com`.
// 39. Match strings containing three consecutive vowels.
// 40. Find all 4-letter palindromes in a string.

// How to use variables in Regex?
