
/**
 * Problem: Group Anagram
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 */


function group(strs){

    // create an object

    let map={};

    for(let str of strs){

        // for every string split it and arrange it in a sorted order
        //🔄 Iteration Breakdown:
// - "eat" → sorted = "aet"
// - "tea" → sorted = "aet"


        let sort= str.split('').sort().join('');

        if(!map[sort]){
            // if you dont find the key in the map create an empty array with the key
            // ex =ate=[]
            map[sort]=[];
        }

        // now store all the values in in the key 
        //// → map["aet"] = ["eat"]
        //→ map["aet"].push("tea")
        // "aet": ["eat", "tea", "ate"],


        map[sort].push(str)
    }

    return Object.values(map)
}