

function Palindrome(s){

    const count={}

    for(let char of s){
        count[char]=(count[char]||0)+1
    }

    let length=0;
    let odd=false;

    // checking all the char count in the count={}

    for(let char in count){

        //if count is even then add to the length
        //ex= abcccdd
        // here a=1,b=1,c=3,d=2
        // so d is even can be used in longest palindrome so we add it to the length

        if(count[char]%2==0){
            length+=count[char]

        }else{
        // here if no. is odd we can still use it if its c=3 so we subtract is by 1 and now c=2 so we add it to the length
        // and if it 1 so it become 0

            length+=count[char]-1

            // making odd = true so we can add 1 odd in the middle for showpeice
            odd=true;
        }
    }

    // if odd is true the add 1 to the length
    
    if(odd)length+=1;
    return length;

    // so the longest palindrome of abcccdd is dcacd 
    // which is 5 because d=2 +c=2 + 1 odd=5

}