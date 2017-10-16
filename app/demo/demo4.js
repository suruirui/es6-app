//函数的默认参数
function breakfast(dessert = '油条', drink = '豆浆') {
	return `${dessert}${drink}`;
}

console.log(
	breakfast('包子', '八宝粥')
);

function fn(arr = [], obj = {}) {
	console.log(arr, obj);
}

fn('123', 123);