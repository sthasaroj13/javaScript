class user {

constructor(username,email,password){
    this.username =username
    this.email = email
    this.password= password
}
strongPss(){
    return(`${this.password}@124`)
}
ChangeUser(){
    return(`${this.username.toUpperCase}`)
}
}
const login = new user ('saroj','sarojstha651@gmail.com','saroj')
// console.log(login.strongPss());
//BTS    try by using function

function user1 (username,email,password){
    this.username =username
    this.email = email
    this.password= password   
}
user1.prototype.strongPss = function(){
    return`${this.password}@124`
}
user1.prototype.CHnageuser = function(){
    return(`${this.username.toUpperCase}`)
}
const lo = new user1 ('sachin','sachinstha651@gmail.com','saro')
console.log(lo.strongPss());