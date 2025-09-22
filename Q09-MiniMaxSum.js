let arr =[1,3,5,7,9];

function miniMaxSum(arr) {
    
    let sumMin = 0;
    let sumMax = 0;
    
    for(let i=0; i<4; i++){
        sumMin += arr[i];
    }

      for(let i=1; i<5; i++){
        sumMax += arr[i];
    }
    
    console.log(sumMin, sumMax);
} 

miniMaxSum(arr);