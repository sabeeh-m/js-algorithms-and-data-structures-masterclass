// Collect all of the odd values in an array
// PURE RECURSION

function collectOddValues(arr){
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// Time Complexity: O(N^2) ???
// Space Complexity: O(N)  ???

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
