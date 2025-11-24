/**
 * Problem====
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 
 */
var findAnagrams = function(s, p) {

    let result=[];
    let smap= new Map;
    let pmap= new Map;

    for(let char of p){

        pmap.set(char,(pmap.get(char)||0)+1)
    }

    let window=p.length;

    for(let i=0;i<s.length;i++){

        let char=s[i]

          smap.set(char,(smap.get(char)||0)+1)

          if(i>=window){

            let leftchar=s[i-window]

            if(smap.get(leftchar)==1){
                smap.delete(leftchar)
            }else{
                smap.set(leftchar,smap.get(leftchar)-1)
            }
          }

          if(Check(pmap,smap)){

            result.push(i-window+1)
          }
    }
    return result
}

function Check(map1,map2){

    if(map1.size !== map2.size) return false

    for(let [key,value] of map1){

        if(map2.get(key)!==value){

            return false
        }
        
    }
    return true
}