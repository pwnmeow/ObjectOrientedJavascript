let x = {};
let y = {};

Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // Object base

let person = {name: 'mosh'}
let ObjectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString');
console.log(descriptor)


Object.defineProperty( person, 'name',{
    writable:false,
    enumerable:true,
    configurable:false
});

person.name = "jhon";
delete person.name;
console(person)


Object.prototype;