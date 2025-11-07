/**
 * Problem: Longest Common Prefix

   Description: Write a function to find the longest common prefix string amongst an array of strings.

                If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Approach:1-comparing 1st string with others

    time: O(n) space:O(1);
 
 */
function Prefix(s){

    //first loof will run up to the lenght of the first string char;

    for(let i=0;i<s[0].length;i++){

        //initializing the char to the [i] char of the 1st string which is [0] =flower and [i]=f

        const char=s[0][i];

        // next loop will be up to the lenght of the whole array of string;

        for(let j=1;j<s.length;j++){

            //checking if the the [i] character of string[j] == char; 

            if(s[j][i]==char){

                // return the char up to the i which are same in all the strings;
                return s[0].slice(0,i);
            }
        }
    }
    //else return empty string
    return "";
}