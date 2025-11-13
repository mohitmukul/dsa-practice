


// bruteForse---

function TwoSum(nums,target){

    for(let i=0;i<nums.length;i++){

        for(let j=0;j<nums.length;j++){

            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }

}


// HashMap 

function TwoSum2(nums,target){

    //stores the key value pair where key is the (num) and value is the (index)
        const map=new Map()

    for(let i=0;i<nums.length;i++){
       
        // stores the value of the nums[i]
        let num=nums[i];

        // here it checks if the target-num is already present in the map
        if(map.has(target-num)){
            return [i,map.get(target-num)]
        }

        // this stores the num (key) with (value) index;
        map.set(num,i)

    }

    // what is target-num =(target -num is the formula to get a pair of numbers to get the target
    //ex= target=9 | nums= [2,7,5,6] 
    /** Imagine each number is a key, and you're looking for its matching lock — the number that completes the sum to target.
- If target = 9 and you see 2, you're hoping to find 7 later. because 9-2=7
- So you store 2 in your map: "I saw 2 at index 0".
- When you see 7, you check: "Did I already see 9 - 7 = 2?"
- Yes! So return both indices.
*/

}

function TwoSum3(nums,target){

        const map={}

    for(let i=0;i<nums.length;i++){
       
        
        let num=nums[i];

        // here it checks if the target-num is already present in the map
        if(target -num in map){
            return [i,map[target-num]]
        }

        // this stores the num (key) with (value) index;
        map[num]=i

    }

}


