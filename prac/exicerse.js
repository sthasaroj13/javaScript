function Books (title,author,pages,read){
this.title =title
this.author=author
this.pages =pages
this.read =read

this.info = function(){
    let readStatus;
if(this.read){
   readStatus ='already read'
}
else{
    readStatus ='not read'
    
}
return`${this.title} written by ${this.author} it have  ${this,pages} ${readStatus}`

}
}
const user = new Books('china harako manxa','hari bansha acharya',256,true)
console.log(user.info());