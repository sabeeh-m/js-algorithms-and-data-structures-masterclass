// Write a recursive function called fib which accepts a number and returns the
// nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is
// the sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
// What about big O?
// 1. Measuring time complexity is relatively simple.
// You can measure the time complexity of a recursive function
// as then number of recursive calls you need to make relative to the input

// 2. Measuring space complexity is a bit more challenging.
// You can measure the space complexity of a recursive function
// as the maximum number of functions on the call stack at a given time,
// since the call stack requires memory.

// Time Complexity: O(N^2)
// Space Complexity: O(N^2)

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

console.log(fib(35))
