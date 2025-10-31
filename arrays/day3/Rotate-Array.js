/* Problem- Rotate Array

    Discription- from the given array of integers rotate array to right by k steps;
   
    Example-  arr=[2,3,4,6,5,13] ,k=3
            output=[6,5,13,2,3,4]
    
    Apporach- >* using extra array
               * reverse method (using two pointer)  */

    let nums = [1, 2, 3, 4, 5, 6, 7]
    let k = 3;

    function rotate(){

        let n=nums.length;
        k=k%n //optimize rotation (checks the extra rotation and start from there)
        let temp=new Array(n) // initialize new array

        for(let i=0;i<n;i++){
            //(i+k)%n handle wrapping (if you fall at the end of array this returns you to the 0 index)
         temp[(i+k)%n]=nums[i];
        }
        
        //copy back to original
         for(let i=0;i<n;i++){
            nums[i]=temp[i];
         }


    }


    /// approach 2- reverse array---

    function Rotate(){

        let n=nums.length;
        k=k%n;

        //reverse whole array
        reverse(nums,0,n-1);
        //reverse first k elements

         reverse(nums,0,k-1);

         //reverse remaining elements

         reverse(nums,k,n-1)


    }
    function reverse(nums,start,end){

     while(start<end)
         { let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;}


    }
