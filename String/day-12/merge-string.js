/**
 * Problem:  Merge Strings Alternately
 * description:You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

approach: two pointer
 */

const mergeAlternately = function(word1, word2) {

    // create empty array;
    const merged=[];
                // loop till the max num length 
    for(let i=0;i<Math.max(word1.length,word2.length);i++){


        // check if the i is inside the bound of the string character
        if(i<word1.length){

        // if it is push to the array
            merged.push(word1[i])
        }


         if(i<word2.length){
            merged.push(word2[i])
        }
        
    }
    return merged.join('')
}