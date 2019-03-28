// Write a function called  stringifyNumbers  which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// let obj = {
//   num: 1,
//   test: ["string", "c", 5, {val: 3, text: "str"}],
//   data: {
//       val: 4,
//       info: {
//           isRight: true,
//           random: 66
//       }
//   }
// }

// stringifyNumbers(obj)

// {
//   num: "1",
//   test: ["string", "c", "5", {val: "3", text: "str"}],
//   data: {
//       val: "4",
//       info: {
//           isRight: true,
//           random: "66"
//       }
//   }
// }

// Modify an original array
function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      obj[key] = stringifyNumbers(obj[key]);
    }
  }

  return obj;
}

// Time Complexity: O(N^2) ?
// Space Complexity: O(N) ?

// Don't modify an original array
// function stringifyNumbers(obj) {
//   let result = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       result[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object") {
//       result[key] = stringifyNumbers(obj[key]);
//     } else {
//       result[key] = obj[key];
//     }
//   }

//   return result;
// }

let obj = {
    num: 1,
    test: ["string", "c", 5, {val: 3, text: "str"}],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// stringifyNumbers(obj);

console.log(stringifyNumbers(obj));
