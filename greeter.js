var Greeter = (function () {
    //constructor of the Greeter class
    function Greeter(message) {
        this.message = message;
    }
    //method which displays the greeting message
    Greeter.prototype.greet = function () {
        return "Good morning " + this.message;
    };
    return Greeter;
}());
//variable to hold the object of the Greeter class
var greeting = new Greeter(" ! Have a nice day");
alert(greeting.greet());
console.log(greeting.greet());
