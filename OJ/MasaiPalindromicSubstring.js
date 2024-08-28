function masaiPalSubString(S){
    let max="";
     for(let i=0;i<S.length;i++){
         let str="";
        
        for (let j=i;j<S.length;j++){
            str+=S[j];
             
        let newstr=""
         for(let i=str.length-1;i>=0;i--){
             newstr+=str[i]
         }
         if(str===newstr && max.length<newstr.length){
             max=newstr
         }
        }
     }
     console.log(max.length)
        
    }