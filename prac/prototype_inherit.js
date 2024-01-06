let user ={
    Name :'saroj',
    LastName :'stha',
    get FullName(){
        return this.name ,this.LastName.toUpperCase()
    },
    set FullName(value){
       this.Name ,this.LastName =value.toUpperCase()
    }
}
console.log(user)