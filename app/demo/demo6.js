//对象表达式

let a = 1,b=2;
let obj = {
	a,b,
	c(){

	}};
console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

//对象属性名
let food = {};
let drink = 'hot drink';
food.dessert = 'cake';
// food['hot drink'] = 'tea';
food[drink] = 'tea';
console.log(food);

//Object.is 对比两个值是否相等
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));

console.log(Object.is(2,'2'));

//Object.assign 把对象的值复制到另一个对象里面
let obj2 = {};
Object.assign(obj2,{'drink':'beer'});
console.log(obj2);

//使用__proto__设置对象的prototype
let person = {
	run(){
		return 'run';
	}
}
let worker = {
	run(){
		return 'worker run';
	}
}

let animal = {
	__proto__:person
}

console.log(animal.run());
console.log(Object.getPrototypeOf(animal) === person);

animal.__proto__ = worker;
console.log(animal.run());
console.log(Object.getPrototypeOf(animal) === worker);

//super
let auto = {
	start(){
		return 'start';
	}
}

let suvCar = {
	__proto__:auto,
	start(){
		return 'suv'+super.start();
	}
}

console.log(suvCar.start());