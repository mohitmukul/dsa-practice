/*
Problem 1: LeetCode  #344 - Reverse String

Description: Reverse a string in-place.

Example:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Approach: Two pointers (start and end, swap)

*/

function reverse(s){

    let start=0;
    let end=s.length-1;

    while(start<end){
        let temp=s[start];
        s[start]=s[end];
        s[end]=temp;

        start++;
        end--;
    }

}