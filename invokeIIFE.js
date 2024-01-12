function run(){
    console.log("hello")
}
run() ;// this is normal function

( function run(){
    //unnamed IIFE
    console.log("hello")
})
();

((name) =>{
//named IIFE
    console.log(`hello ${name}`)
})
('saroj')

let ball1 =10
let ball2 =5

function add(num1,num2){
    let  total = num1+num2
    return total
}
console.log(add(ball1,ball2))
// so iife is imeditately invoking function
 //  last example 
  
  const Maths =(function  (a,b){
    let  add = a+b
    let sub = a-b
    let divide =a/b

     return`The add is :${add}  The sub is :${sub} & The divide is:${divide}`
 })(2,2);
 console.log(Maths);
  

 const math1 ={
    add : 'a+b'
 }
 
 console.log(math1);