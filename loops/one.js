for (let i = 0; i <10; i++) {
    const element = i;

    if (element ==7) {
        console.log("7 is my lucky number")
    }
    console.log(element)
    
}

for (let i = 0; i <=10; i++) {
   
    for (let j = 0; j <=10; j++) {
        console.log(i + '*' + j +' = ' +i*j)
        
    }
}

// break and continue
 
 for (let index = 0; index <=15; index++) {
    if (index == 7) {
        console.log(`my favourite number is ${index}`)
        // break
        continue
    }
    console.log(index)
 }