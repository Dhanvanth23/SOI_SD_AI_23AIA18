let arr = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); 


let str = "racecar";
let isPalindrome = str === str.split('').reverse().join('');
console.log(isPalindrome); 


let input = "hi hello";
let capitalized = input
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalized); 
