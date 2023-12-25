
//for each loop 


const prog =['js','java','python']
prog.forEach( function (items){
// console.log(items)
})
prog.forEach( (values)=>{
    // console.log(values)
})

 function name(datas){
    // console.log(datas)
 }
 prog.forEach(name)


 //array bhitra object xa ani teslai lai loop lagauni 

 const myOject =[
    {
        subjectName :"social",
        shortfrom :"soc"
    },
    {
        subjectName :"science",
        shortfrom :"sci"
    },
    {
        subjectName :"english",
        shortfrom :"eng"
    }
    
 ]
myOject.forEach( (items)=>{
    console.log(items.shortfrom)
})