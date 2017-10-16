{
	//类基本定义和生成实例
	class Parent {
		constructor(name) {
			this.name = name;
		}
	}
	let p = new Parent('v');
	console.log(p);

	class Child extends Parent {
		// constructor() {
		// 	super();
		// }
		get longName() {
			return '--' + this.name;
		}
		set longName(value) {
			this.name = value;
		}
	}
	let c = new Child("rose");
	console.log(c.name);
	c.longName = 'jack'; //set操作
	console.log(c.longName); //get操作
}

{
	//静态成员
	class Parent {
		constructor(name) {
				this.name = name;
			}
			//静态方法
		static run() {
			console.log('i am run');
		}
	}
	Parent.run();
	Parent.age = 20;
	console.log('静态属性', Parent.age);
}