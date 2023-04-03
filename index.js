
// Write your algorithm here
    function hasTargetSum(array, target) {
      const seen = new Set();
      for (let num of array) {
        if (seen.has(target - num)) {
          return true;
        }
        seen.add(num);
      }
      return false;
    }
    
    function hasTargetSum(arr, target) {
      const complements = {};
    
      for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (complements[num] !== undefined) {
          return true;
        }
        complements[target - num] = i;
      }
      return false;
    }
    
// Test Case 1
// Returns true when a pair of numbers in the array add up to the target value
expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;

// Test Case 2
// Returns true when a pair of numbers in the array add up to the target value
expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;

// Test Case 3
// Returns false when no pair of numbers in the array add up to the target value
expect(hasTargetSum([1, 2, 5], 4)).to.be.false;

// Test Case 4
// Returns false when the array is empty
expect(hasTargetSum([], 10)).to.be.false;

// Test Case 5
// Returns true when the target is equal to the sum of all elements in the array
expect(hasTargetSum([1, 2, 3, 4], 10)).to.be.true;

// Test Case 6
// Returns true when the array contains negative numbers
expect(hasTargetSum([4, 7, -2, 3, 8], 1)).to.be.true;

// Test Case 7
// Returns false when all elements in the array are the same
expect(hasTargetSum([5, 5, 5, 5, 5], 10)).to.be.false;

      
/* 
  Write the Big O time complexity of your function here
//The time complexity of the hasTargetSum function is O(n), where n is the length 
of the input array. This is because the function iterates through the array once, 
checking each element and its complement against the target sum. The worst-case 
scenario is that the target sum is not found, and the function has to iterate 
through the entire array. Therefore, the time complexity is linear with respect 
to the size of the input array.//
/* 
  Add your pseudocode here
//Define a function named hasTargetSum that takes two parameters:
a. An array of integers named arr.
b. A target integer named target.

Declare an empty object named complements.

Loop through each element in the arr array and perform the following:
a. Check if the current element's value is already a key in the complements object.
b. If it is, return true.
c. If it is not, add a new key-value pair to the complements object, where the key is the difference between the target and the current element's value, and the value is the index of the current element in the array.

Return false if the loop completes without finding a matching pair.
/*
  Add written explanation of your solution here
The above solution is a brute-force approach that solves the problem in O(n^2) time complexity. It starts by iterating through each element of the array using a for loop. For each element, it then iterates through the rest of the array to find a second element that when added to the first element, equals the target value. If such a pair is found, 
it returns true. If the end of the array is reached and no pair is found, 
the function returns false. The solution works by checking every possible pair of 
elements in the array, so it is guaranteed to find a solution if one exists. 
However, the time complexity of the solution is O(n^2), which means that the 
time required to find a solution grows exponentially with the size of the 
input array. For very large input arrays, this solution may become too slow to 
be practical, and a more efficient algorithm would be needed.//


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
}

module.exports = hasTargetSum;
