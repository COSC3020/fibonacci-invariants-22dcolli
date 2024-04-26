[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

#Answer
I think a good invariant would be the array that holds the numbers in the sequence. I think to generalize I would call it arr[(i-2),(i-1)]. 
I chose this in particular because it will always hold the two items needed to get the third and subsequently next item in the array.
It is the same place that every single iteration of the program starts out at, even at the begining with the arroy with [0,1].
This is why I think it is a good invariant in this scenario.
(Update)
I would say specifically we would always assume that we would have an array of the necesarry elements to work with at the beginning of each iteration.
(Update 2)
In class we said that if we are at i, then we expect the previous 2 elements to be the correct fibonacci elements. From my other answers I had it partially right but neglected to mention the necesarry elements being $(i-2),(i-1)$
