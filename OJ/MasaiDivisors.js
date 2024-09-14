function masaiDivisors(left, right, k) {
    var sum = 0;
   for(var i=left;i<=right;i++) {
    if(i%k==0) {
     sum+=1;
 }
}
   console.log(sum)
}