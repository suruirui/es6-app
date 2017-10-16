//set map WeakSet WeakMap
{
	let list = new Set();
	list.add(5);
	list.add(7);
	console.log('list', list);
	console.log('size', list.size);
}

{
	let arr = [1, 2, 34, 5];
	let list = new Set(arr);
	console.log(list.size);
}

{
	let list = new Set();
	list.add(1);
	list.add(1);
	list.add(1);
	console.log(list);
	//去重
	let arr = [2, 3, '2', 3, 4];
	let list2 = new Set(arr);
	console.log(list2); //{2, 3, "2", 4}
}

{
	let arr = ['green', 'yellow', 'red'];
	let list = new Set(arr);
	console.log('has', list.has('green'));
	console.log('delete', list.delete('red'));
	list.clear();
	console.log(list);
}

{
	//遍历
	let arr = ['green', 'yellow', 'red'];
	let list = new Set(arr);
	for (let key of list.keys()) {
		console.log('keys', key);
	}
	for (let value of list.values()) {
		console.log('values', value);
	}

	for (let [key, value] of list.entries()) {
		console.log(key, value);
	}

	list.forEach((item) => {
		console.log(item);
	});
}

{
	//WeakSet
	//1. 与set支持的数据类型不一样，元素只能是对象
	//2. weakset对象都是弱引用 并且不会顾及垃圾回收机制
	let weakList = new WeakSet();
	let obj = {};
	weakList.add(obj);
	console.log('weakList', weakList);
}

{
	let map = new Map();
	let arr = ['123'];
	map.set(arr, 456); //set方法设置元素
	console.log(map);
	console.log('map', map, map.get(arr)); //get通过key找value
}

{
	let map = new Map([
		['001', 'lisi'],
		['002', 'jack']
	]);
	console.log(map);
	console.log(map.size);
	//delete 
	map.delete('001');
	console.log(map);
	//clear
}

{
	//weakMap 与weakSet类型 键类型只能是对象
	let weakMap = new WeakMap();
	let o = {};
	weakMap.set(o, 123);
	console.log(weakMap.get(o));
}

{
	//map set与Array和Object对比
	//数据结构横向对比 增查 改 删
	let map = new Map();
	let arr = [];
	//增
	map.set('t', 1);
	arr.push({
		t: 1
	});
	console.info('map-arr', map, arr);
	//查 
	let map_exits = map.has('t');
	let arr_exits = arr.find(item => item.t); //true
	console.log(map_exits, arr_exits); //返回对象Object {t: 1}

	//改
	map.set('t', 2);
	arr.splice(0, 1, {
		t: 2
	});
	console.info('map-arr', map, arr);

	//删
	map.delete('t');
	arr.splice(0, 1); //可以通过findIndex获取元素索引
	console.info('map-arr', map, arr);
}

{
	//map set object对比
	let item = {
		n: 20
	};
	let set = new Set();
	let map = new Map();
	let obj = {};

	//增
	map.set('n', 20);
	set.add(item);
	obj['n'] = 20;

	console.log('map-set-obj', map, set, obj);
	//查
	console.log({
		map_has: map.has('n'),
		set_has: set.has(item),
		obj_has: 'n' in obj
	});

	//改
	map.set('n', 2);
	item.n = 2;
	obj['n'] = 2;
	console.log('map-set-obj', obj, map, set);

	//删除
	map.delete('n');
	set.delete(item);
	delete obj['n'];
	console.log('map-set-obj-empty', obj, map, set);

	//总结：优先使用map set放弃传统的数组和对象
}