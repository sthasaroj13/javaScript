class User{
    constructor(username){
        this.username = username
    }
    add(){
        console.log(`your user name is: ${this.username}`)
    }


}
class Teacher extends User{
    constructor(username, email, password){

        super(username) // super keyword automaticlly extends the User or goes  to main user constructor
        this.email =email
        this.password =password
    }
    addCourse(){
    console.log(`New Course is added by :${this.username}`);
    }
}
const saro = new Teacher('ram thapa','ram@gmail.com','123ram');
const saroj = new Teacher('sita','sita@gmail.com','123ram');
saro.addCourse()