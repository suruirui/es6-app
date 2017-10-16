
let name = 'wangz';
let age = '20';
function sayHello(name,age){
	console.log(`我叫${name}，今年${age}岁`);
}
//重命名导出
// export {name,age,sayHello as hello};
//默认导出
// export default sayHello;
export {sayHello as default};