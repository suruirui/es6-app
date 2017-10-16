//正则扩展
//正则新增特性
//1. 构造函数的变化 y修饰符
//2. 正则方法的扩展 s修饰符
//3. u修饰符
{
	let reg = new RegExp('xyz', 'i'); //第一参数必须是字符串
	let reg2 = new RegExp(/xyz/i);
	console.log(reg.test('xyz123'), reg2.test('xyz123'));
	let reg3 = new RegExp(/xyz/ig, 'i'); //第二参数的修饰符会覆盖第一参数的修饰符
	console.log(reg3.flags); // i
}
//es5常用修饰符有 i g 
//es6新增 y u修饰符
{
	let s = 'bbb_bb_b';
	let reg = /b+/g;
	let reg2 = /b+/y;
	//第一步匹配都是为bbb
	console.log('one', reg.exec(s), reg2.exec(s));
	//第二步 g匹配到bb y匹配null
	console.log('two', reg.exec(s), reg2.exec(s));
	//相同点：都是全局匹配
	//不同点，g
	//y修饰符匹配的第一个必须是紧跟第一个匹配的下个字符
	//sticky属性表示正则对象是否开启粘连模式
	console.log(reg.sticky, reg2.sticky);
}
//u修饰符 表示unicode
{
	console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); //true
	console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A')); //false
	//加{}的unicode字符要加u才能被识别
	console.log(/\u{61}/.test('a')); //false
	console.log(/\u{61}/u.test('a')); //true

	console.log(`\u{20BB7}`);//𠮷
	
	let s = '𠮷';
	//大于两个字节的字符需要加u识别
	//.匹配任意字符的前提是小于两个字节
	console.log('u',/^.$/.test(s)); //false
	console.log('u-2',/^.$/u.test(s)); //true

	console.log('test',/𠮷{2}/.test('𠮷𠮷')); //false
	console.log('test-2',/𠮷{2}/u.test('𠮷𠮷')); //true
	//.不能识别的还有换行符 回车符    行分隔符 段分隔符 
	//需要s修饰符，s修饰符提案中
}