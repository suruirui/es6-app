//es6函数扩展
//参数默认值 rest参数 扩展运算符 箭头函数 this绑定 尾调用 

{
	let fn = (x = 'hello', y = 'world') => {
		console.log('默认值', x, y);
	}
	fn();
}

{
	let x = 'test';

	function test2(x, y = x) {
		console.log('作用域', x, y);
	}
	test2('kill'); // kill kill
}

{
	//rest参数
	function test3(...arg) {
		for (let v of arg) {
			console.log('rest', v);
		}
	}
	test3(1, 2, 3);
}

{
	//扩展运算符
	console.log(...[1, 2, 4]);
	console.log('a', ...[1, 2, 4]);
}

{
	//箭头函数
	let arrow = v => v * 2;
	console.log('arrow', arrow(2));
	let arrow2 = () => 5;
	console.log('arrow2', arrow2());
}

{
	//尾调用  提高性能
	function tail(x) {
		console.log('tail', x);
	}

	function fx(x) {
		return tail(x);
	}
	fx(123);
}