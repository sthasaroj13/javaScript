let  User ={
    name : 'saroj',
    address : 'gorkha',
    getInfo : function(){
        console.log(`My name is ${this.name} and I am  from ${this.address}`)
    }
}
let admin ={
    isAvaibale :true
}
Object.setPrototypeOf(admin,User) // this is the  prototype inherit where  we inject the Object and 
//setPrototypeOf(admin,User) here i take the USer properties in admin

console.log(admin.getInfo());


