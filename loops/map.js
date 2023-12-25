const num =[1,4,5,8,4,1,2,5]
// const number =num.map( (n)=> {return n +10})

// chaining 
const number = num.map( (n) => n*10)
                .map( (n)=> n+1)
                .filter( (n)=>n>=50)
console.log(number)