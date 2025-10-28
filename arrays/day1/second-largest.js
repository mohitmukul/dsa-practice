/* Problem- Check the second-Largest element

    Discription- from the given array of integers check the second largest element ;
   
    Example-  arr=[2,3,4,6,5,13]
            output= 6
    
    Apporach- >* Single pass ,in-place
               * initialize two variables : largest=-infinity,secondeLargest=-infinity;  
               * loop through the array start from 1
               * on every iteration check the element with statement
               * if current element is greater then the largest 
               * initialize largest with current element and secondlargest with the largest   */



const arr=[2,3,4,6,5,13]

let SecondLargest=-Infinity;
let largest=-Infinity;


for(let i=1;i<arr.length;i++){

    //check if current element is greater then the largest 

    if(arr[i]>largest){

        //initialize largest with current element 
        // and secondlargest with largest
    
        SecondLargest=largest;
        largest=arr[i]
    }
    //check if the current element is smaller then the largest but greater than the secondlargest
    if(arr[i]<largest && arr[i]>SecondLargest){
        SecondLargest=arr[i];
    }
}

console.log(SecondLargest);