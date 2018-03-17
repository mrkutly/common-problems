// n is the largest number in the array
array = [1, 4, 6, 3, 2];
n = array.length + 1

//this equation essentially adds all the array numbers together
// ***INCLUDING THE MISSING NUMBER ***
sumN = (n * (n+1)) / 2;

//Reduce the array to the sum of its parts
function sum(a, b){
  return a + b;
}
arraySum = array.reduce(sum);

//find the missing number by comparing the two sums
missingNumber = sumN - arraySum;
console.log(missingNumber);
