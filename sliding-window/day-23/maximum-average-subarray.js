


function Subarray(nums,k){

    let window=0;

    for(let i=0;i<k;i++){

        window+=nums[i];
    }

    let maxval=window;

    for(let i=k;i<nums.length;i++){

        window -=nums[i-k];
        window +=nums[i]

        maxval=Math.max(maxval,window)
    }
    return maxval/k
}