/* Problem- Count the odds from the given array

    Discription- from the given array of integers check the no. of odds;
   
    Example-  arr=[2,3,4,6,5,13]
            output=3 [3,5,13]
    
    Apporach- >* Single pass for-loop over array indices   
               * loop through the array
               * on every iteration check the element with statement
               * if current element is odd increase the count with 1    */



const arr=[2,3,4,6,5,13]

let count=0;

for(let i=0;i<arr.length;i++){
    //check if index[i] reminder !=0
    if(i%2!=0){

        // if true increase count with 1
        count++
    }
}

console.log(count);