// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using
// the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'd') // false
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:
//     Time - O(N)
//     Space - O(N)
// Bonus:
//     Time - O(N LOG N)
//     Space - O(1)

// Multiple pointers pattern
function areThereDuplicates(...args) {
  args.sort();
  console.log(args);

  let first = 0;
  let next = 1;

  while (next < args.length) {
    if (args[first] === args[next]) {
      return true;
    }

    first++;
    next++;
  }

  return false;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 1) // true
// areThereDuplicates('a', 'b', 'c', 'd') // false
// areThereDuplicates('a', 'b', 'c', 'a') // true

console.log(areThereDuplicates(1, 2, 1))
