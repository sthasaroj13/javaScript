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