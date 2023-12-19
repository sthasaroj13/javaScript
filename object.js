//singleton
let myname =Symbol('sachin') // this is symbol object
const user  ={
name :"saroj",
age: 22,
[myname]:'suraj',
location : "kathmandu",
isLoogedIn :false,
lastdayLogin :['sunday','monday']

} // this is object

// console.log(user.name)
// console.log(user['name']);
// console.log(user['location']);

user.location ='gorkha'  //this is use to change the object
// Object.freeze(user) // this is use to freeze the object 
// console.log(user)


user.location ='lumbini' // lumbini is not  changeb 
// console.log(user)


 // function


user.greeting = function(){
    console.log("hello world")
}

user.greetingtwo= function(){
    console.log(`hello user,${this.name}`) //string interpolation
}
console.log(user.greeting())