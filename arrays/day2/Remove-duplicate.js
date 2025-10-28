/* Problem- Remove the Duplicate 

    Discription- from the given array of integers remove the duplicate element ;
   
    Example-  arr=[2,3,3,4,6,6,5,13]
            output= [2,3,4,6,5,13],[5]
    
    Apporach- >* single pass, set,two-pointer
                  */


const arr=[2,3,3,4,6,5,5,13]

//first approach;

for(let i=0;i<arr.length;i++){

    //introdusing second loop to check the current element from all the element;

    for(let j=i+1;j<arr.length;j++){

        
        // IF found the duplicate ,then remove it from array using splice()
        if(arr[i]==arr[j]){
            arr.splice(j,1);

        // on every iteration decreasing the j to prevent missing the element 
            j--;
        }
    }
    
}

console.log(arr) 

//second approach;-------------

const uniqueArr=[...new Set(arr)]


console.log(uniqueArr)

//third approach -two pointer;-----



function Twopointer(arr){

    //initializing variable to track the unique element 

    let write=1;
    for(let i=0;i<arr.length;i++){

        // checking if the current element is !== the previous (write index)

        if(arr[i]!==arr[write-1]){

            //if it is not then set the write postion with the unique one
            arr[write]=arr[i];
            //and then increase the write to check another;
            write++;
        }
        
}

//return the length of the unique array;
arr.length=write;
return arr;

}
console.log(Twopointer(arr))