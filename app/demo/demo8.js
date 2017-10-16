//继承
class Person {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`hello,我是${this.name}`);
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name);
		this.age = age;
	}

	sayHello() {
		console.log(`hello,我是${this.name}，今年${this.age}岁`);
	}
}

let wangzhuang = new Student('wz', 20);
wangzhuang.sayHello();