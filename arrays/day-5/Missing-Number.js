/* Problem- Missing Number

Description:Given array [0,1,2,...,n] with one number missing, find it.

Example:
Input: [3,0,1]
Output: 2

Input: [0,1]
Output: 2
    
    Apporach- >* 1- subtracting current number with its index number
                2- Sum approach (subtracting expected sum form the actual sum)
                 */


function FindMissingN(){

    //time=O(n) space=O(1)
    const nums = [3,0,1]

    //initializing ret to the nums length so can get the result after adding the subtracted number;

    let res=nums.length;

    for(let i=0;i<nums.length;i++){

           // here i is the index and nums[i] is the number 
           // adding it to the res after subtracting
           //ex= 3+=0-3
        // res= 3+(-3) =0;
        //      0+=1-0= 1;
        //      1+=2-1= 2(1+1);

        res+=i-nums[i];
    }
    return res
}


// in this approach subtracting the  actual sum with the expected sum
function FindMissingN2(){
    const n=nums.length;

    const expectedSum= n*(n+1)/2  /* ex= [3, 0, 1], n = 3
                                    expected sum (0+1+2+3): 3*4/2 = 
                                    Actual sum (3+0+1): 4   */

    let ActualSum = 0;
    for(let i=0;i<n;i++){
        ActualSum+=nums[i];
    }
    return expectedSum-ActualSum;
}
