/* Problem-Shuffle the Array


    Description:Given array [x1,x2,...,xn,y1,y2,...,yn], return [x1,y1,x2,y2,...,xn,yn]
   
    Example-  Input: nums = [2,5,1,3,4,7], n = 3
            Output: [2,3,5,4,1,7]
    
    Apporach- >* creating extra array
      */


    function Shuffle(nums,n){


      //creating an array size of n*2
      const result=new Array(n*2);

      let index=0;

      for(let i=0;i<n;i++){
        
        result[index]=nums[i];
        index++;
        result[index]=nums[i+n];
        index++;

        //increasing index for every position of the result array
      }



    }
