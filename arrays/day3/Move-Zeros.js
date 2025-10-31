/* Problem- Move Zeros

    Discription- Given an integer array nums, move all 0's to the end of it
     while maintaining the relative order of the non-zero elements.;
   
   Example :

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
    
    Apporach- >* using two pointer
                */


    function MoveZero(nums){

        //initialize a variable

        let left=0;        

        for(let right=0;right<nums.length;right++){
            //check if the current index is zero or not
            //if zero skip
          if(nums[right]!==0){
            //if not zero the swap the left index with the current/right;

            let temp=nums[left];
            nums[left]=nums[right]
            nums[right]=temp;
        }
            
        }
    }
