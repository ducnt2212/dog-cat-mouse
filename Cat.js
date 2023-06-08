import Mouse from "./Mouse.js";

function Cat() {
  this.stomach = [];
}

Cat.prototype.eat = function (animal) {
  if (animal instanceof Mouse) {
    this.stomach.push(animal);
  } else {
    throw new Error("Cat can only eat mouse!");
  }
};

export default Cat;
