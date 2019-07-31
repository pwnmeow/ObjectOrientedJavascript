// Constructor Function 

function Person(name,age){
    this.name = name;
    this.age = age;
    this.draw = function(){
        console.log('hello ', this.name)
    }
}

const sheeraz = new Person("sheeraz", 20);

Person.prototype.sayHello = function(){
    console.log('draw');
}

console.log(Object.keys(sheeraz));

for ( let key in sheeraz){
    console.log(key)
}
