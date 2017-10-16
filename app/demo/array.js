//数组新增特性
//Array.from Array.of copyWithin
//find\findIndex fill entries \keys \values
//includes
{
	let arr = Array.of(3, 4, 7, 9, 11);
	console.log('arr=', arr);

	let empty = Array.of();
	console.log('empty=', empty);
}

{
	//Array.from把伪数组或者集合转成真正的数组
	let p = document.querySelectorAll("p");
	let pArr = Array.from(p);
	pArr.forEach((item) => {
		console.log(item.textContent);
	});
	//Array.from map数组
	console.log(Array.from([1, 3, 5], (item) => {
		return item * 2;
	}));
}

{
	//fill
	console.log('fill-7', [1, 'a', undefined].fill(7)); // [7,7,7]
	console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //["a", 7, 7]
}

{
	for (let index of['1', 'c', 'ks'].keys()) {
		console.log('keys', index);
	}

	for (let value of['1', 'c', 'ks'].values()) {
		console.log('values', value);
	}

	for (let [index, value] of['1', 'c', 'ks'].entries()) {
		console.log('entries', index, value);
	}
}

{
	//在当前数组内部 把指定位置的成员复制到其他位置上
	//将第一参数 替换为 第二到第三参数的区间的成员
	console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); //[4, 2, 3, 4, 5]
}
//查找元素是否在数组中 
{
	//find只返回第一个符合条件的数组 findIndex返回下标
	console.log([1, 2, 3, 4, 5].find((item) => {
		return item > 3;
	}));
	console.log([1, 2, 3, 4, 5].findIndex((item) => {
		return item > 3;
	}));
}

{
	//includes
	console.log('number', [1, 2, NaN].includes(1));
	console.log('number', [1, 2, NaN].includes(NaN));
}