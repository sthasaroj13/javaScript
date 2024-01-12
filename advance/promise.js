//promise is all about resolve and reject which is done by .then() , .catch() and .finally()


const promiseOne = new Promise( function(resolve,reject){
// it is used to do an async task
//Db calls,  cryptography and network call
    setTimeout( function(){

        console.log("hello saroj")
        resolve() // when we call resolve than it will connect to .then
    },1000)

})
//another method
promiseOne.then(function(){

    console.log("hi how are you?");
})

new Promise( function(resolve,reject){
setTimeout(function(){
    console.log("hi Mr.Bodhan");
    resolve()
},1000)

}).then(function(){
    console.log('hello sir ')
})


let promiseThree = new Promise (function(resolve,reject){

    setTimeout(function(){

resolve({username:'saroj shrestha', enail:'sarojshrestha651@gmail.com'}) // if we pass the parameter than  we can get in .then

    })
},1000)
promiseThree.then( function(user){
console.log(user)    //resolve parameter
})


const promiseFour = new Promise( function(resolve,reject){


setTimeout(function(){
let error = false;
if(!error){
    resolve({username:'saroj',password:'saroj123'})
}
else{
    reject({error:"somethimh went wrong"})
}

},1000)

})
promiseFour.then(function(user){        // so this is the process of doing promise  where data is given in resolve  and  that data will  implement in .then  and  the reject is implement in catch
    // console.log(user);
    return user.username

}).then(function(username){
console.log(username);
}).catch( function(error){
console.log(error);
}).finally( function(){

    
console.log("everything is implementd")
    
})


promiseFour2 = new Promise( function (reslove,reject){
setTimeout(function(){
let reply = false;
if(reply){
    reslove({ username:'saroj'})
}
else{
    reject('errorrrrrrr!!!!!!!!!!')
}

},1000)
}).then(function(user){
return user.username
}).then(function(username){

    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('completed');
})



// promise  applying by async 
 let PromiseFive = new Promise( function (reslove,reject){
    setTimeout(function(){
    let error= true;
    if(!error){
        reslove({ username:' bodhan Dhakal'})
    }
    else{
        reject('errorrrrrrr!!!!!!!!!!')
    }
    
    },1000)
    });
    async function consumePromiseFive(){
try {
   const response = await PromiseFive

   console.log(response);
} catch (error) {
    console.log(error);
}

    }
    consumePromiseFive()

    // async  json is used

    async function jsonUse(){
const response =await fetch('https://jsonplaceholder.typicode.com/users')
// response.json()
try {
    const data = await response.json()
console.log(data);
} catch (error) {
    console.log(error);
}
    }
    jsonUse()

    // fetch by .then and .catch

    fetch('https://api.github.com/users/hiteshchoudhary ')
    .then(function(response){
return response.json()

    }).then(function(data){
console.log(data)
    })
    .catch( function(errorHandle){

        console.log('error occured',error)
    })