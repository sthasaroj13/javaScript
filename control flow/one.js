// if
const  balance =100;

if(balance>=500){
console.log("your are rich baby")
}
else{
    
console.log("you are poor")
}
//block scope
 const score =200
 if (score>100) {
    let power ="fly"
    console.log(`you can :${power}`)
 } else {
    console.log(`you cannot :${power}`)
 }
//  console.log(`you cannot :${power}`) you cannot use variable of scope  in global environment


// //ternary operator
// condition ?true :false
let football =1000
football >=500 ? console.log("prrice is more than 500"):console.log("prrice is less than 500")