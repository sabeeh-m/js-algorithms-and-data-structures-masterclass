// Write a function called findLongestSubstring which accepts a string and
// returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6

// Time Complexity -
// Space Complexity -

// Sliding Window pattern + Frequency counter pattern
function findLongestSubstring(str) {
  let start = 0;
  maxLength = 0;

  while (start < str.length) {
    let end = start;
    let length = 0;
    frequencyCounter = {};

    while (end < str.length) {
      let char = str[end];
      if (frequencyCounter[char]) {
        break;
      } else {
        frequencyCounter[char] = 1;
        end++;
        length++;
      }
    }

    maxLength = Math.max(maxLength, length);
    start++;
  }

  return maxLength;
}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6

console.log(findLongestSubstring('thisisawesome')); // 6
