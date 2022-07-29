class Polygon {
  constructor(height, width) {
    this.name = "Rectangle";

    this.state = { age: 13 };
    console.log(this, "pol");

    this.sayName();
  }
  sayName() {
    console.log(this, "xixi");
    console.log("Hi, I am a ", this.name + ".");
  }
}

class Square extends Polygon {
  constructor() {
    //this.height; // ReferenceError，super 需要先被调用！

    // 这里，它调用父类的构造函数的，
    // 作为 Polygon 的 height, width
    super();
    this.state = { name: 123 };
    this.name = "Square";
    this.sayName();
    // 注意：在派生的类中，在你可以使用'this'之前，必须先调用 super()。
    // 忽略这，这将导致引用错误。
  }
}

let a = new Square();
console.log(a.state);
