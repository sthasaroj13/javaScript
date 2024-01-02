// object literal

 const  user ={

    username : 'saroj',
    address : 'gorkha',
    getuserdb : function(){
        console.log(`address of saroj is :${this.address}`);
    }
 }
 console.log(user.username
 )
 
console.log(user.getuserdb())

//constructor function 
// new keyword 
-create empty object {}
// -constructor function call
// - this keyword inject

// new is the constructorfunction   yesla chai  aauta object  banayara multiple instances garna kam lagxa 
//  const promiseOne = new Promise()

//  const date = new Date()

//   example of constructor  function

 function User(username,age,password){
    this.username= username
    this.age=age
    this.password=password
    return this // bydefult return hunxa nagara pani hunxa 

 }
 const userOne =  new User('sarojstha','24','saroj@123')
 const userTwo =new User('sachin','22','sachin123')
 console.log(userOne);
 console.log(userTwo);