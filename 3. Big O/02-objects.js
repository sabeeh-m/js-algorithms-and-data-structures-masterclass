// Objects are Unordered key-value pairs
// Insertion, deletion, accessing is O(1)
// Searching is O(n)
let obj = {
  firstName: "Andrew",
  age: 33,
  isEngineer: true,
  favoriteLanguage: "JavaScript"
};

//This method is O(n)
console.log(Object.keys(obj));

//This method is O(n)
console.log(Object.values(obj));

//This method is O(n)
console.log(Object.entries(obj));

//This method is O(1)
console.log(obj.hasOwnProperty("favoriteLanguage"));
