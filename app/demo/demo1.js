//"use strict" //ES5中开启严格模式 变量未声明不能引用 ES6默认开启严格模式
//let 和const
function test(){
	let a = 1;
	for(let i=1;i<3;i++){
		console.log(i);
	}
	// console.log(i);  //i在块级作用域之外就不存在
	// let a = 2; // Duplicate declaration let不能重复声明
}
test();

const demo = ()=>{
	let a = 20;
	console.log(a);
}

demo();

//const
//1.一旦定义不可修改
//2.声明必须赋值
const PI = 3.1415926;
function getPerimeter(r){
	// PI = 3.1415926;
	// PI = 8;  //"PI" is read-only 
	return 2 *PI *r;
}
console.log(getPerimeter(5));

//使用const声明的常量，指向对象的引用，对象本身可以修改
const k = {
	a:1
}
k.a = 2;
k.b = 3;
console.log(k);