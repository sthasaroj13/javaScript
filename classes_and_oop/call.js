function setname (username){
    this.username=username
}

function CreateUser (usenname,email,password){
setname.call(this,usenname) // while doing call  you have to pass reference this
this.email =email
this.password =password
}
const login  = new CreateUser('saroj','saroj123@gmail.com','1333sajoi')
console.log(login);