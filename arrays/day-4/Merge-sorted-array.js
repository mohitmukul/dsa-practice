/* Problem- Rotate Array

Description:Merge two sorted arrays into one sorted array.
Given nums1 with extra space at end, merge nums2 into nums1.

    Example- Input: nums1 = [1,2,3,0,0,0], m = 3,
                    nums2 = [2,5,6], n = 3
                    Output: [1,2,2,3,5,6]
    
    Apporach- >* using three pointer
                 */

let nums1 = [1,2,3,0,0,0]; let m = 3;
let nums2 = [2,5,6]; let n = 3;

function Merge(){

    //point to  the last element in the meaningful part in nums1(i.e. m-1 ) and nums2 (n-1);
    let arr1=m-1;
    let arr2=n-1;
    //point to the last index in nums1;
    let right=m+n-1;

    //runs until arr1 is greater than 0;

    while(arr1>=0){
        
        //check if the nums1[arr1] is greater than 0 and greater than the last index of nums[arr2];
        if(nums1[arr1]>=0 && nums1>nums2[arr2]){
            //place the nums1[arr1] into nums1[right];
            nums1[right]=nums1[arr1];

            arr1--;
        }else{
            //place the nums2[arr2] into nums1[right];
            nums1[right]=nums2[arr2];
        }

        right--;
    }

}