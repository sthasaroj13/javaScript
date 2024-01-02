class User{
    constructor(username){
        this.username=username
    }

    add(){
        console.log(`your username ${this.username}`)
    }
    static CreateId(){  
        // static  stop the access of method  which you are calling  
        return "1@13"
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }

}
const phone = new Teacher('rimal','rimal@gmail.com')
phone.add()
console.log(phone.CreateId())