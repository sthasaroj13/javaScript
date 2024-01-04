// get set by function

function User(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
get:function(){
    return this._email.toUpperCase()
},
set:function(value){
    this._email =value
}


    })
}
const result = new User('saroj@google.com','sa1233')
console.log(result.email);