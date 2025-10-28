/* Problem- Sum of given array--

    Discription- from the given array of integers calculate the sum ;
   
    Example-  arr=[2,3,4,6,5,13]
            output= 33 2+3+4...
    
    Apporach- >* Single pass for-loop over array indices 
               * initialize a variable
               * loop through the array 
               * on every iteration add the element to the variable  */


const arr=[2,3,4,6,5,13]

let sum=0;

for(let i=0;i<arr.length;i++){
    
    sum=sum+arr[i];
}

console.log(sum);