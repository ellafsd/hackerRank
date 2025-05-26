function compareTriplets(a, b) {
    let x=0;
    let y=0;
        //let arr=[];
    for(let i=0 ; i<3; i++){
      if(a[i]>b[i]){
        x++;
       }else if(a[i]==b[i]){
         continue;
       } else{
        y++;
       }
      }
      return [x,y];
    }
    