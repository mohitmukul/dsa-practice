/* Problem- Check if the array is Sort

    Discription- from the given array of integers check the array is sorted in non decreasing order ;
   
    Example-  arr=[2,3,4,6,5,13]
            output= false
    
    Apporach- >* Single pass 
               * initialize a variable with false;  
               * loop through the array start from 1
               * on every iteration check the element with statement  
               * if sorted set varable to be true   */


const arr=[2,3,4,5,5,6]

let sorted=false;

for(let i=1;i<arr.length;i++){

    //check if the current element is smaller than the previous element [i-1]
    if(arr[i]<arr[i-1]){
        sorted=false;
    }else{
        sorted=true;
    }
}

console.log(sorted);