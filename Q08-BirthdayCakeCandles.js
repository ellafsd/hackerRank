function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
     let count =0;
     for(let height of candles){
        if(height===max){
            count++;
        }
     } return count;
    

}