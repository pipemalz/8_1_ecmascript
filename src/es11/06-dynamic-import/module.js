export function hello(expression) {
  return new Promise((res, rejc) =>{
      if(expression){
        res(`Hello ${expression}`);
      }else{
        rejc('No expresssion')
      }
  })
}
