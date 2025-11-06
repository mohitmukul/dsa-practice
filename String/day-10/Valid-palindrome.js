/*
Problem 2: LeetCode #125 - Valid Palindrome

Description: Check if string is palindrome (ignoring non-alphanumeric, case-insensitive)

Example:
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false
Approach: Two pointers from both ends

*/

//approach1 time:O(n) space:O(n)

function Palindrome(s){

    //this will ignore or replace every numeric, apfanumaric and spaces

    let str=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let arr=str.split('')//this will convert it into an array

    let start=0;
    let end=s.length-1;

    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;

        start++;
        end--;
    }
    if(arr==str) return true;
    else return false;
}

//approach1 time:O(n) space:O(1)

function Palindrome22(s){

let str=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
let start=0;
 let end=s.length-1;

  while(start<end){

    if(str[start]!==str[end])return false;// it checks if the starting element and ending
                                         //  element of the str is same or not because if it 
                                         // is palindrome it should be same
    start++;
    end--
  }
  return true;


}