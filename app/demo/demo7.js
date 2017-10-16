//类
class Person{
	constructor(name){
		this.name = name;
		this.langs = [];
	}

	get skil(){
		return this.langs;
	}
	set skil(lang){
		this.langs.push(lang);
	}

	sayHello(){
		console.log(`hello,我是${this.name}`);
	}
	//静态方法
	static coding(){
		return 'js:hello world';
	}
}

let p = new Person('李四');
console.log(p.sayHello());

p.skil = 'js';
p.skil = 'css'; 
console.log(p.skil);
console.log(Person.coding());
