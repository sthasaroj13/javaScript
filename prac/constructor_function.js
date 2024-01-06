function Hero(name,level){
    this.name = name
    this.level = level
}
    Hero.prototype.greet = function(){
        return`${this.name},hello`
        
    };
    function Warrior(name,level,wepon)
{
    Hero.call(this,name,level)
    this.wepon =wepon
}
Warrior.prototype.attack =function(){
    return `${this.name} attack with the ${this.wepon}`
}
const hero1 = new Hero('saroj' ,'1')
const Warrior1 = new Warrior('saroj' ,'1','khukuri')
console.log(hero1);
console.log(Warrior1.attack());