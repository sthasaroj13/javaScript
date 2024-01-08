const myarr =[1,2,3]


const object1 ={
    username: 'saroj',
getemail : function (params) {
    console.log(`hello   your user name is :${this.username}`)
    
}

}
console.log(object1.getemail())

 // i made my own object 
   Object.prototype.saroj = function (){
    console.log(' i can be every where ')
   }
   myarr.saroj()
   object1.saroj()
// i can also make my  own   object through array  but this apply ownly  on array not every whwere
Array.prototype.hisaroj = function (){
    console.log('  i will be there')
}
myarr.hisaroj()
// object1.hisaroj() //  this will be not called



let username = 'saroj   '

String.prototype.truelength =  function(){

    console.log(this);
    console.log(`the true length is :${this.trim().length}`)
}
username.truelength()
'bodhan Dhakal '.truelength()
'sachin'.truelength()