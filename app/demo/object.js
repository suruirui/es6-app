//对象的扩展 
{
	//简洁表示法
	let o = 1;
	let k = 2;
	let es5 = {
		o: o,
		k: k
	}
	console.log('es5', es5);
	let es6Obj = {
		o,
		k
	};
	console.log(es6Obj);
	//对象中的函数
	let person = {
		run() {
			return 'run';
		}
	}
	console.log(person.run());
}

{
	//属性表达式
	let a = 'b';
	let es6Obj = {
		[a]: 'c'
	}
	console.log(es6Obj);
}

{
	//Object新增api
	//Object.is 判断两个值是否相等 同 ===
	console.log(Object.is('123', 123)); //false
	console.log('数组', Object.is([], []), [] === []); // false

	//浅拷贝 assign  
	console.log(Object.assign({
		a: 'a'
	}, {
		b: 'b'
	}));

	let test = {
		k: 123,
		o: 456
	};
	for (let [key, val] of Object.entries(test)) {
		console.log(key, val);
	}
}