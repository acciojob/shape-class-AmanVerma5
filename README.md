# Shape Class

## Instructions

Create a class Shape with properties x and y. Add a method moveTo(x, y) that sets the x and y properties to the new values. Create a subclass Circle that extends Shape, and has an additional property radius. In the Circle class, override the moveTo(x, y) method to also move the circle's center point by the same amount as the x and y properties. Use the super keyword to call the moveTo(x, y) method of the Shape class.

## Test case/Sample input:

```const myCircle = new Circle(0, 0, 5);
console.log(myCircle.x, myCircle.y); // 0, 0
myCircle.moveTo(10, 20);
console.log(myCircle.x, myCircle.y); // 10, 20
```
