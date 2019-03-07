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

// Frequency counter pattern
function areThereDuplicates() {
  console.log(arguments);
  let frequencyCounter = {};

  for(let index in arguments) {
    let value = arguments[index];
    if (frequencyCounter[value]) {
      return true;
    } else {
      frequencyCounter[value] = 1;
    }
  }

  return false;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'd') // false
// areThereDuplicates('a', 'b', 'c', 'a') // true

console.log(areThereDuplicates('a', 'b', 'c', 'd'))
