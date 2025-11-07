/*
PROBLEM: Given a string s, find the first non-repeating character in it
and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation: The character 'l' at index 0 is the first character that does not occur more than once.

Example 2:
Input: s = "loveleetcode"
Output: 2
Explanation: 'l' appears twice, 'o' appears twice, 'v' appears once at index 2.

Approach: two pass
*/

function unique(s){

    //empty object which stores the string and its freq;

    const freq={};

    // checks the every char of string if it is not present 
        // add the key c and its value to 0+1
        // next time it key appears again then it adds 1 with the previous key value which is 1

    for(let c of s){
        freq[c]=(freq[c]||0)+1
    }


 // this checks if the char in freq at index value present only one time 
    // the first value it finds with char value 1 it return the index;q     `1`       

        for(let i=0;i<s.length;i++){
            if(freq[s[i]]==1){
                return i
            }
        }

       
    return -1
        
}