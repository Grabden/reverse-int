module.exports = function reverse (n) {
  let num=0,n1;
  if(n<0)n=n*(-1);
  while(n>0){
    n1=n%10;
    n=(n-n1)/10;
    num=num*10+n1;
  }
  return num;
}
