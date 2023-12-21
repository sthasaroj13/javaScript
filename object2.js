// you can add object into object in js 
 const user ={
    email : "sarojshrestha651@gmail.com",
    username:{
        fullname:{
            firstname:'saroj',
            lastname :"stha"
        }
        }

    } 
 console.log(user.username.fullname);
 //object assign  this   static method helps  to comibne various objects
 const obj1 = {1:"a",2:"b"}
 const obj2 ={3:"c",4:"d"}
 const obj3 =Object.assign({},obj1,obj2) //{} this is target and obj1 and obj2 is sources
 const obj4 = {...obj1,...obj2} // this is spread  syntex  which allow you to iterate the values

 console.log(obj3); 
 console.log(obj4); 
 console.log(Object.keys(user)) // this is the object call of any object and it output come in arrary which can apply in loop 
 console.log(Object.values(user))
 console.log (user.hasOwnProperty('saroj'))


 // object de-structure 
  const  carvalue ={
    car :"Nexion",
    brand :"TATA",
    price :"22,50,500"
  }
 const {brand}= carvalue  //using {} in the object after object is made is called de-structure
 console.log(brand)
  

 //json
 // this is the format of jason
 {


    "name":"saroj stha"
    "address": "kathmandu"
 }