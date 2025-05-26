function plusMinus(arr) {
    // Write your code here
     let positive = 0;
     let negative = 0;
     let zero = 0;
     for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positive++;
        }else if(arr[i]==0){
            zero++;
        }else{
            negative++;
        }
     }
       console.log(positive / arr.length);
       console.log(negative / arr.length);
       console.log(zero / arr.length);
}