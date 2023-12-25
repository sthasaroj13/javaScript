// run operator
function run(...num1){
    return num1

}
console.log(run(20,40,50))
// object handle in fuction

const user ={
    name: "saroj",
    address :"gorkha"
}
function  objHandle(){
console.log(`the username is ${user.name} and the address is ${user.address}`)
}
objHandle(user)

// array handle in function

const myarray =[1,45,40,85]

function returnvalue(arryreturn){
    return arryreturn[5]
}
console.log(returnvalue(myarray))