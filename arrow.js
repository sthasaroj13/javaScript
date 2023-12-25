// .this is apply in current context or value


const name ={
    username:"saroj stha",
    location :"gorkha",
    messageTo : function (){
        console.log(`${this.username},welcome to website  your location is ${this.location}`)
    }
}
name.messageTo()
name.username ="sachin"
name.messageTo()

// arrow function () =>{}

 const num =(num1,num2) => {
    return num1 +num2

}
console.log(num(2,4))


const num1 =(num1,num2) => num1 +num2 //emplicite return
console.log(num1(2,4))

// if you wrap a function in { } you have to wirte retrun but if you wrap in  () you dont  have to
const num2 =(num1,num2) => (num1 +num2) //emplicate return
console.log(num2(2,4))


// if you  want toreturn  in object you have to wrap in ()
const num4=(num1,num2) => ({name :"saroj"}) 
console.log(num4())