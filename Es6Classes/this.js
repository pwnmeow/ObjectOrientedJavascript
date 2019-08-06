const Circle = function(){
    this.draw = function(){ console.log(this) }
}

const c = new Circle();

//Meathod Call
c.draw();

const draw = c.draw();
//Function Call
draw()

class BroWhat {
    bro(){}
}

bro() //wont execute js classes use strict inside so it wont write to global object