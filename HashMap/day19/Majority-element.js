/**
 * Problem: Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
 */

function Majority(nums){

    let count=0;
    let candidate=null;

    for(let num of nums){

        // if count=0 then initialize the candidate with new num 

        if(count==0){
            candidate=num
        }

        // if candidate==current num then+1 or -1 
        count+=(candidate==num?1:-1)

        /// so what it does when loop start for the first time it initalize candidate to be num 
        // then next step it increase count from +1 for the current candidate
        //for next num if it is same then it increase count with 1 and candidate remain same and if num is different it -1 
        // so after -1 count is still greater then 0 then the candidate do not change but if the count is 0 then it changes the candidate with the current num 
    }
    return candidate
}