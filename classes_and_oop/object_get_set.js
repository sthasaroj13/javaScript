// get set by using object 

const User ={
    _email: 
    'sachin@gmail.com',
    password :'sachin@123',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
this.email = value
    }
}
const Result = Object.create(User);
console.log(User.email)