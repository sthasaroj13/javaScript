// get set by using class

class User{

    constructor(email,password){
        this.email =email
        this.password =password
    }
    get email(){
        return this._email.toUpperCase() // in the get and set the same variable of  constructor is not insrt
    }
    // not variable is set on get set _email
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
this._password =value.toUpperCase()
    }

}
const result = new User('saroj@gmail.com','sa123')
// console.log(result.email);



