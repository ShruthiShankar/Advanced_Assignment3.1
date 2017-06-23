class Greeter {
	
	message : string;

	//constructor of the Greeter class
	constructor(message : string){
		this.message = message;
	}

	//method which displays the greeting message
	greet() : string {
	return `Good morning ` + this.message;
	}
}

//variable to hold the object of the Greeter class
let greeting = new Greeter(` ! Have a nice day`);
alert(greeting.greet());

console.log(greeting.greet());