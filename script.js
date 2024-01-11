//your JS code here. If required.
class Shape {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    moveTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Circle extends Shape {
    constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;
    }
  
    moveTo(x, y) {
      super.moveTo(x, y);
    }
  }
  
  // Test case
  const myCircle = new Circle(0, 0, 5);
  console.log(myCircle.x, myCircle.y); // Output: 0, 0
  myCircle.moveTo(10, 20);
  console.log(myCircle.x, myCircle.y); // Output: 10, 20