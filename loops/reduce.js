const num = [1,4,6]
 
const mynum = num.reduce( function(acc,currval){
    console.log(`acc:${acc} currval:${currval}`)
    return acc+currval

},0)
console.log(mynum)

const nu=num.reduce( (acc,curr) =>acc+curr,1)
console.log(nu)


 const shoppinCart =[
    {
        itemName :"moniter",
        price : 21000
    },
    {
        itemName :"mouse",
        price : 2100
    },
    {
        itemName :"keyboard",
        price : 2500
    },
    {
        itemName :"pendrive",
        price : 100
    },
 ]
 const totalPrice =shoppinCart.reduce( (acc,items)=>{
     console.log(`acc:${acc} itemsPrice:${items.price} `)
    
    return acc + items.price},0)
 console.log(totalPrice)