//symbol是一种新的数据类型 生成一个独一无二的值
{
	//声明
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1 === a2); //false

	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log(a3 === a4); //true
}

{
	//Symbol使用场景
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]: '123',
		'abc': 345,
		'c': 456
	}
	console.log('obj', obj); //{abc: 345, c: 456, Symbol(abc): "123"}
	//对象中使用symbol做key值 无法用for in/let of循环遍历到
	for (let [key, value] of Object.entries(obj)) {
		console.log(key, value);
	}
	//getOwnPropertySymbols取得symbol值
	Object.getOwnPropertySymbols(obj).forEach((item) => {
		console.log(obj[item]);
	});
	//Reflect.ownKeys遍历所有key 包括symbol
	Reflect.ownKeys(obj).forEach((item) => {
		console.log(item);
	});
}