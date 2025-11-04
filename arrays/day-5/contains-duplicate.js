/* Problem- Contains Duplicate

Description:Given array, return true if any value appears at least twice.

Example:
Input: [1,2,3,1]
Output: true

Input: [1,2,3,4]
Output: false
    
    Apporach- >* 1- using set to compare the value and store unique value
                 2- using sort method*/

//Approach 1---

let nums=  [1,2,3,1]

function Duplicate() {
  // time:O(n) space:O(n)

  // this line initialized to have an empty set named numsSet to store unique elements of array.
  const numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    // this line checks if the element already exist in the set()
    if (numsSet.has(nums[i])) {
      //if exist then return true;
      return true;
    }
    // if not then add the value in the set
    numsSet.add(nums[i]);
  }
  return false;
}

//Approach 2

function FindDuplicate() {
    // time:O(nlog(n)) space:O(n)
  /// sort the array in assending/increasing order
  // the value will be if duplicate= [1,1,2,3,4,4]

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    // checks the element with its previous element;

    if (nums[i] == nums[i - 1]) {
      return true;
    }
  }
  return false;
}
