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