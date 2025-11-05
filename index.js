let message = "Hello, world!";
console.log(message);
message = "Nice Weather!";
console.log(message);

let name = "L";
let age = 42;
let hobby = "neet";
console.log(name);
console.log(age);
console.log(hobby);

console.log(true && false);
console.log(false || false);
console.log(!true);

console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false);

let fishes = ['Salmon', 'Goldfish', 'Tuna'];

console.log(fishes.shift());

let colors = ["red", "green", "blue"];
colors.push("black");
console.log(colors);

colors.shift();
colors[0] = "blue";
colors[1] = "green";
console.log(colors);

colors.unshift("yellow");
console.log(colors);

let grade = "B";

switch(grade) {
    case "A":
        console.log("You got an A, so here's a Chocolate for you!");
        break;
    case "B":
        console.log("You got a B, here's a Cookie for you!");
        break;
    case "C":
        console.log("You got a C, there's room for improvement and here's your Candy!");
        break;
    default:
        console.log("No reward to give.");
};
grade = "A";

const calculateSquare = (side) => {
    console.log("The square side is "  + side);
    console.log(`The area of the square is ${side * side}`);
    console.log(`The perimeter of the square is ${side * 4}`);
}
calculateSquare(8);

const person = {
    name: "Alex",
    age: 22,
    greet: function() {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old. `);
;}
}
person.greet();


const items = [
  {name: "Phone", price:  300},
  {name: "Smart TV", price: 220},
  {name: "Gaming Console", price: 150}
];

const cart = [
    {name: , quantity: }
];

const addItem = (item, quantity = 1) => {
  if(item in items.name) {
    if(item in cart.name) {
        cart[cart.name.indexOf(item)].quantity += 1;
        console.log("Quantity added");
    } else {
        cart.push({name: item, quentity: 1});
        console.log("Added to cart");
    };
  } else {
    console.log("we don't sell that item.");
    return;
  };
};

addItem("Phone");
