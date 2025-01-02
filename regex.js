// ^, $, [], *, ., +
// \w \d \s
// [^], \g, (), \1, {}
// leadingSpace = regexExp; use with .test()

// match h
"hello".match(/h/);

// starting with char
"hello".match(/^h/); // match
"hello".match(/^a/); // no match

// starting with two chars => basically starting with followed by another char
"hello".match(/^he/); // match
"hllo".match(/^he/); // no match
"hllo".match(/^hl/); // match

// ending with char
"hello".match(/o$/); // match
"hello".match(/h$/); // no match

// ending with two chars
"hello".match(/lo$/); // match
"hello".match(/ko$/); // no match

// all occurences of char
"hello".match(/h*/); // match
"hhh".match(/h*/); // match
"".match(/h*/); // match
"h".match(/hh*/); // match
"".match(/hh*/); // no match

// atleast one occurence of char
"hello".match(/\w+/); // match
"ello".match(/h+/); // no match
"hhello".match(/h+/); // match
"hhello".match(/hh+/); // match
"hello".match(/hh+/); // no match

// starts with and ends with char
"hello".match(/^\w+\w+$/); // match
"hl".match(/^\w+\w+$/); // match
"h".match(/^\w+\w+$/); // no match

// starts with two chars and ends with two chars
"hello".match(/\w\w+\w\w+$/); // match
"".match(/\w\w+\w\w+$/); // no match

// match strings with length <= 3
"hello".match(/^.?.?.?$/);

// starting wtih ab or cd

// match two consecutive occurences of chars
"foot".match(/(\w)\1/);
"foot".match(/(\w)\1/);
"foot".match(/(\w)\1(?!\1)/);

isConsecutiveChars();

// inverts works only in square brackets
"foot".match(/^^f/); // not working
"foot".match(/^[^f]/); // working
"aoot".match(/^[^f]/); // working

const isConsecutiveChars = (string) => {
  const exp = /(\w)\1\1/;

  if (!exp.test(string) && string.match(/(\w)\1/)) {
    return true;
  }
  return false;
};

"foot".match(/(\w)\1/);

// only consonents
"bcd".match(/[^aeiou]+$/);

// even and odd
const isEven = /^(..)*$/;
const isOdd = /^(..)*.$/;
isOdd.test("true");
isEven.test("true");
