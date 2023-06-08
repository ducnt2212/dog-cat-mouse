import Cat from "./Cat.js";
import Mouse from "./Mouse.js";
import Dog from "./Dog.js";

var cat = new Cat();
var mouse = new Mouse("Mickey");
var dog = new Dog();
try {
  cat.eat(dog);
} catch (error) {
  console.log("Error while cat eating a dog");
}
console.log(cat);
