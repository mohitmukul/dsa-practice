/**
 * Problem: Kids With the Greatest Number of Candies;
 * description:There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

approach 1= nested loop = time:O(n*2) space O(n)
         2= single pass = time:O(n) space O(n)
 */

         function approach1(candy ,extraCandy){

            let output=[];

            for(let i=0;i<candy.length;i++){

                let havemax=true;
                
                for(let j=0;j<candy.length;j++){

                    if(candy[j]>candy[i]+extraCandy){
                         havemax=true;
                         break
                    }
                }
                output.push(havemax);
            }
            return output;

         }

         //approach =2


        function approach2(candy ,extraCandy){

            let max= Math.max(...candy);

            return candy.map(cand=> cand+extraCandy > max)

        }

