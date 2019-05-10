// Given two strings, write a function to determine
// if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2){
  if (str1.length !== str2.length)
      return false;

  let frequencyCounter1 = {};
  for(let char of str1){ // O(N)
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1; // O(1)
  }
  console.log(frequencyCounter1);

  let frequencyCounter2 = {};
  for(let char of str2){ // O(N)
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1; // O(1)
  }
  console.log(frequencyCounter2);

  for(let key in frequencyCounter1){ // O(N)
      if (frequencyCounter1[key] !== frequencyCounter2[key]) // O(1)
          return false;
  }

  return true;
}

// Time complexity: O(N) [O(3*N)]
// Space complexity: O(N) [O(2*N)]

// isAnagram('', ''); // true
// isAnagram('aaz', 'zza'); // false
// isAnagram('anagram', 'nagaram') // true
// isAnagram("rat","car") // false
// isAnagram('rat', 'tar'); // true
// isAnagram('awesome', 'awesom') // false
// isAnagram('qwerty', 'qeywrt'); // true
// isAnagram('texttwisttime', 'timetwisttext') // true

console.log(isAnagram('anagram', 'nagaram'))
