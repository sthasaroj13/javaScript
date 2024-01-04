const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// so to know the property  we have to pass Pi property key math is module
console.log(descriptor)
// math.PI is constant becasuse  it writable and enumerable is false
  // how can we create own  constant object

   const Tea ={
    name :'saroj is good developer',
    address : 'kathmandu',
    isAvailable :true,  
    getnum: function(){
        console.log('error occur')
    }
   }
   console.log(Object.getOwnPropertyDescriptor(Tea,"name"));


   Object.defineProperty(Tea,'name',{
    writable:false,
    enumerable:false// if we insert false then  we can not use loop in the obejct  and it become constant object
    // so the we cannot  find the name after inserting false 
   })
   console.log(Object.getOwnPropertyDescriptor(Tea,"name"));


 for (const [key,value] of Object.entries(Tea)) {
    if(typeof value !== 'function'){

        console.log(`${key}:${value}`);
    }
 }