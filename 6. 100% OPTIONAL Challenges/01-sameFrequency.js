// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// Frequency counter pattern
function sameFrequency(num1, num2) {
  let num1Str = num1 + '';
  let num2Str = num2 + '';

  if (num1Str.length !== num2Str.length)
    return false;

  let num1FrequencyCounter = getFrequencyCounter(num1Str);
  let num2FrequencyCounter = getFrequencyCounter(num2Str);

  if (Object.keys(num1FrequencyCounter).length !== Object.keys(num2FrequencyCounter).length)
    return false;

  for(let key in num1FrequencyCounter){
    if (num1FrequencyCounter[key] !== num2FrequencyCounter[key])
      return false;
  }

  return true;

  function getFrequencyCounter(str) {
    let result = {};
    for (let char of str) {
      result[char] = (result[char] || 0) + 1
    }

    return result;
  }
}

//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false
//  sameFrequency(3589578, 5879385) // true
//  sameFrequency(22, 222) // false

console.log(sameFrequency(222, 222))
