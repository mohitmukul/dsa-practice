
/**
 * Problem : 383. Ransom Note
Solved
Easy
Topics
premium lock icon
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 


 */


function find(ransomNote,magazine){

    let freq={}

    for(let str of magazine){

        // count the frequency of each char in magazine

        freq[str]=(freq[str]||0)+1
    }

    for(let str of ransomNote){

        // - Check if that character exists in the freq map (built from magazine)
// If it doesn’t exist or is used up (count[char] === 0), return false
// Decrement the count to mark that the character has been used


        if(!freq[str]||freq[str]==0){
            return false
        }
        freq[str]--
    }
    return false

}