//字符串新增特性 
//Unicode表示法 模板字符串
{
	console.log('a', '\u0061');
	console.log('s', '\u20BB7'); // 大于0XFFF长度 未正常显示
	console.log('s', '\u{20BB7}');
}
//遍历接口 新增方法10种
{
	let s = '𠮷';
	console.log('length', s.length); //2 每两个字节算一个长度
	console.log('0',s.charAt(0));
	console.log('at0',s.charCodeAt(0));  //charCodeAt取码值

	//es6中
	let s1 = '𠮷a';
	console.log('length',s1.length); // 3 
	//codePointAt取4个字节
	console.log('code0',s1.codePointAt(0));  //134071
	console.log('code0',s1.codePointAt(0).toString(16)); //20bb7 16进制
	console.log('code1',s1.codePointAt(1));  //1是取到后两个字节
	console.log('code2',s1.codePointAt(2));  // 97 2是取到后两个字节
}

{
	//fromCharCode fromCodePoint都是从字节变为字符
	//fromCodePoint 能处理大于两个字节的字符
	console.log(String.fromCharCode('0x20bb7')); //ஷ
	console.log(String.fromCodePoint('0x20bb7')); //𠮷
}
{
	let str = '\u{20bb7}abc';
	for(let i=0;i<str.length;i++){
		console.log('es5',str[i]);
	}
	//let code 字符串遍历接口
	for(let code of str){
		console.log('es6',code);
	}
}

//新增方法
{
	//includes判断字符串中是否包含某字符
	//startsWith endsWith是否以某些字符为起始或者结尾 
	let str = 'string';
	console.log('includes',str.includes('r'));
	console.log('startsWith',str.startsWith('str'));
	console.log('endsWith',str.endsWith('ing'));
}

{	
	//repeat 重复字符串 参数为重复次数
	let str = 'abc';
	console.log(str.repeat(2));
}

{
	// 字符串模板
	let name = 'Jack';
	let age = '20岁';
	let str = `我叫${name},今年${age}`;
	console.log(str);
}

{
	//字符串补0 padStart padEnd
	console.log('1'.padStart(3,'0')); //第一参数长度 第二参数为补字符串
	console.log('1'.padEnd(4,'0'));
}
//标签模板
{
	let user ={
		name:'Jack',
		info:'hello world'
	};
	abc`i am ${user.name},${user.info}`;
	console.log(abc`i am ${user.name},${user.info}`);//i am ,,,Jackhello world
	//使用场景 多语言转换 防止xss攻击
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;  
	}
}

{
	//raw 转义\
	console.log(String.raw`Hi\n${1+2}`);
	console.log(`Hi\n${1+2}`);
}