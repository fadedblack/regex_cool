### **Type 1: Explanation**

1.  What does the expression `"cat, bat, rat".match(/b\w+/)` do?
    => The expression will return `bat`.

2.  What will `"123-456-7890".match(/\d{3}/)` return?
    => The expression will return `123`.

3.  What does `"hello\nworld".match(/.\n./)` return?
    => The expression will return `o\nw`.

4.  What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
    => The expression will return `name@example.com`.

5.  What does `"file.txt".match(/\.txt/)` do?
    => The expression will return `.txt`.

6.  What does `"red green blue".match(/green/)` do?
    => The expression will return `green`.

7.  What will `"abcdef".match(/[a-c]/)` return?
    => The expression will return `a`.

8.  What does `"The quick brown fox".match(/q.+?k/)` return?
    => The expression will return `quick`.

9.  What does `"apple".match(/a[a-z]+/)` return?
    => The expression will return `apple`.

10. What will `"a1b2c3".match(/\d+/)` return?
    => The expression will return `1`.

11. What does `"good food mood".match(/o+o/)` do?
    => The expression will return `oo`.

12. What does `"@username".match(/@\w+/)` return?
    => The expression will return `@username`.

13. What does `"path/to/file".match(/\/to\//)` do?
    => The expression will return `/to/`.
    <!-- Forgot to give / -->

14. What does `"1.23".match(/\d\.\d+/)` return?
    => The expression will return `1.23`.

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?
    => The expression will return `AB123`.

16. What does `"hello_world".match(/\w+_\w+/)` return?
    => The expression will return `hello_world`.

17. What does `"123abc456".match(/\d{3}/)` return?
    => The expression will return `123`.

18. What does `"My name is John".match(/name \w+/)` return?
    => The expression will return `name is John`.
    <!-- John shouldn't print, space is not a word char -->

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?
    => The expression will return `https://example.com`.

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?
    => The expression will return `EFGH`.

21. What does `"abc123".match(/(\w)(\d)/)` return?
    => The expression will return `abc`, `123`.
    <!-- Wrong, a single char and a number should print. c1 should be the output -->

22. What will `"hello world".match(/(\w+) (\w+)/)` return?
    => The expression will return `hello`, `world`.

23. What does `"1234".match(/\d{2,3}/)` return?
    => The expression will return `123`.

24. What will `"aaaabbb".match(/a{2,}/)` return?
    => The expression will return `aaaa`.

25. What does `"hello".match(/[aeiou]{2}/)` return?
    => The expression will return `el`.
    <!-- Wrong, only a single character will be taken. It's length can never be more than 1 -->

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?
    => The expression will return `ABCD1234`.

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?
    => The expression will return `file_name.ext`, `file_name`, `ext`.

28. What does `"Mississippi".match(/s{2,}/)` return?
    => The expression will return `ss`.

29. What will `"hello world".match(/(\w)(?= \w)/)` return?
    => The expression will return `o w`.
    <!-- Don't know what `?=` means -->
    <!-- Found out what `?=` means -->

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?
    => The expression will return match: `2025-01-01`, `01`, `01` and `01`.

31. What does `"abc123".match(/(\d+)(\w+)/)` return?
    => The expression will return `12`, `3`.
    <!-- Half Correct, \w also includes digits. `1` is matched by \d then `2` is matched by \w, then `12` is matched by \d and then `3` is matched by \w -->

32. What does `"hello123".match(/\D+/)` return?
    => The expression will return `hello`.
    <!-- Don't know what `\D` means -->
    <!-- Found out what `\D` means -->

33. What will `"yes no maybe".match(/(\w+) (\w+) (\w+)/)` return?
    => The expression will return `yes`, `no`, `maybe`.

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?
    => The expression will return `#123456`.

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?
    => The expression will return `aaa`, `111`.

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?
    => The expression will return `1,234.56`, `234`.

37. What does `"aabbcc".match(/a(b{2})c/)` return?
    => The expression will return `abbc`, `bb`.

38. What does `"xyzz".match(/x(y(z))/)` return?
    => The expression will return `xyz`, `yz`, `z`.
    <!-- `y` should be `yz` -->

39. What does `"abab".match(/(ab)\1/)` return?
    => The expression will return `ab`.

40. What will `"abc123abc".match(/(abc)\d+\1/)` return?
=> The expression will return `abc123abc`.
<!-- Wrong. + is greedy, it will take all of them -->

<!-- Learnings -->
<!-- 1.\w takes digits as well -->
<!-- 2. grouping inside grouping works (()) -->
<!-- Need to practice 2. -->
<!-- 3. + is greedy. It will continue until the codition is true, it will try to eat as much as possible -->
<!-- 4. I know ?= and \D and \W means -->

### **Type 2: Task**

1. Match any string that contains a number.
2. Find all lowercase letters in a string.
3. Match a string that ends with "ed".
4. Match the word "yes" in a string.
5. Find any two consecutive vowels in a string.
6. Match any string containing the word "hello".
7. Find a string that contains exactly two spaces.
8. Find a string that starts with "abc".
9. Match any string that contains the digit `7`.
10. Find all occurrences of the letter `e`.
11. Match a string that has at least one uppercase letter.
12. Find a string with a period (`.`) in it.
13. Match a string that contains a single space.
14. Match all words that start with the letter `c`.
15. Match a string that contains the sequence "123".
16. Match a string that contains a forward slash (`/`).
17. Find all strings that contain "and".
18. Match a string that starts and ends with the same letter.
19. Match all lowercase letters except "x" and "y".
20. Find all words in a string that are exactly 5 letters long.
21. Match all words starting with a vowel.
22. Find all sequences of two or more consecutive digits.
23. Match all words that contain exactly three letters.
24. Find all occurrences of the word "cat" or "dog".
25. Capture the first and last name from a string like `"John Doe"`.
26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
27. Extract all the hashtags from a tweet.
28. Validate a 24-hour time format like `"23:59"`.
29. Capture the area code and phone number from `(123) 456-7890`.
30. Find sequences of whitespace followed by a word.
31. Match strings containing at least one uppercase and one digit.
32. Find all non-alphanumeric characters in a string.
33. Match email addresses.
34. Validate dates in the format `YYYY-MM-DD`.
35. Extract the filename and extension from a path like `/path/to/file.txt`.
36. Find all duplicate words in a sentence.
37. Match words that do not contain the letter "e".
38. Extract the domain name from a URL like `https://www.example.com`.
39. Match strings containing three consecutive vowels.
40. Find all 4-letter palindromes in a string.
