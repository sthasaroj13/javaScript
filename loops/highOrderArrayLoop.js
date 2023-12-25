// for 
let myar =[1,2,4,5,6]
for (const num of myar) {
    console.log(myar)
}
//map
const map = new Map()
map.set('lol',"laugh out loud")
map.set('wbu',"what about you")
map.set('ik',"i konw")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,":-", value)
    
}

// map in Object

const myObj ={
    js :"javascrpit",
    rb :"rubby",
    swift: "swift for apple"
}
// console.log(myObj)
for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
        
    }

