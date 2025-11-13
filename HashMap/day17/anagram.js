/**
 *Problem =  242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 
 */
function anagram(s,t){

    // set to count frequency of char

    const set={};

    if(s.length!==t.length) return false

    for(let count of s){

        // add the frequency

        set[count]=(set[count]||0)+1
    }

    for(let char of t){

        // if char is undefined in set

        if(!set[char]){
            return false
        }

        //decreasing set[char] by 1 to check if all count are 0 if(0) then its anagram
        set[char]--
    }
    return true



}