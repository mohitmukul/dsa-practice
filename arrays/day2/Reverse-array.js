/* Problem- Reverse an Array;

    Discription- from the given array of integers check the second largest element ;
   
    Example-  arr=[2,3,4,6,5,13]
            output= [13,5,6,4,3,2]
    
    Apporach- >* two pointer in-place swap
               * initialize three variables ;  
               * loop until right is geater than left
               * on every iteration set the variable temp to the left element 
               * so we can replace the right with temp;
               * replace the left from the right (that is why we have set the temp value to be left )
               * then right with temp  */

const arr=[1,2,3,4,5,6,7]

let temp=0;
let left=0;
let right=arr.length-1;

// check if the they cross the mid 

while(right>left){

    temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;

    //increase the left and decrease the right so it can move to the next index;
    left++;
    right--;
}
console.log(arr);