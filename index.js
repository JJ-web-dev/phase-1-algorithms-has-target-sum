function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    const sumComparable = (target - array[i])
  for(let j = i + 1; j < array.length; j++)
    if(array[j] === sumComparable){
      return true
    
  }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  write a function that takes two arguments. The arguments will be an array and a single number. If any pair 
  of numbers in the array add up to the single number the function will return true.  
Add your pseudocode here
      add the first number to each number in the array
      compare the sum to the target number
      return true when the sum and target match
      else return false 

*/

/*
  Add written explanation of your solution here
  this function takes two arguments, an array and a target number. A for loop iterates through the array one time 
  and subtracts each number in the array from the target number. The value of each subtracted number is stored in 
  the sumComparable value. A second for loop iterates through the array and compares
  each array value to the the values stored in sumComparable. If a value in the array absoblutely equals one of 
  the numbers in sumComparable the function will return true.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 12, 40], 15));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 0));
}

module.exports = hasTargetSum;
