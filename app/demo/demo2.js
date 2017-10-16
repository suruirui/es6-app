//解构赋值
//解构赋值分类
// 数组解构赋值 对象解构赋值 字符串解构赋值 
//布尔值解构赋值 函数参数解构赋值 数值解构赋值

//解构赋值语法
{
	let a,b,rest;
	[a,b] = [1,2];  //数组类型的解构赋值  同a = 1,b =2 简化书写
	console.log(a,b);
}

{
	let a,b,rest;
	[a,b,...rest] = [1,2,3,4,5,6];
	console.log(a,b,rest);
}

{
	let a,b;
	({a,b}={a:1,b:2})
	console.log(a,b);
}

{
	let a,b,c,rest;
	[a,b,c=3]=[1,2];//c=3 如果没有默认值 则为undefine
	console.log(a,b,c);
}

//解构赋值使用场景
//1.交换变量
{
	let a=1;
	let b=2;
	[a,b] = [b,a];
	console.log("a="+a,"b="+b);
}

//2.函数返回多个值
{
	function fn(){
		return [1,2];
	}
	let a,b;
	[a,b] = fn();
	// let arr= fn();
	// console.log(arr[0]);  //旧的写法
	console.log(a,b);
}

//3.返回多个值并选择
{
	function fn(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,,,b] = fn();  //数组解构赋值匹配
	console.log(a,b);  //1 5
}
{
	function fn(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,...b] = fn();  //数组解构赋值匹配
	console.log(a,b);  //1 2 [3,4,5]
}

//对象解构赋值
{
	let o ={p:42,q:true};
	let {p,q} = o;
	console.log(p,q);
}

{
	let {a=10,b=5} = {a:3};
	console.log(a,b);  //3 5
}

//对象解构赋值使用场景 服务器端通信,获取json
{
	let jsonData={
		name:'Jack',
		group:[{
			name:'三年级',
			teacher:'李老师'
		}]
	}
	let {name:stuName,group:[{name:groupName}]} = jsonData;
	console.log(stuName,groupName);
}

//展开操作符 ...

let lang = ['js','php'];
let langArr = ['c',...lang];
console.log(...lang);
console.log(...langArr);

// Rest/剩余 操作符 ...
function breakfast(dessert,drink,...foods){
	console.log(dessert,drink,...foods);
}

breakfast('油条','面包','豆浆','茶叶蛋');




