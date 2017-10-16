//数值处理新增特性
//1.新增方法
//2.方法调整
{
	//ES6 2 8进制表示法
	console.log(0b1000); //0b 0B开头 107的2进制 
	console.log(0o10); //0o 0O开头 
}

{
	console.log('15', Number.isFinite(15)); //true 有尽
	console.log('15/0', Number.isFinite(15 / 0)); //false 无尽
	console.log('NaN', Number.isFinite(NaN)); //false NaN不是数
	console.log('NaN', Number.isNaN(NaN)); //true
	console.log('NaN', Number.isNaN(0)); //false
}

{
	//isInteger判断是否整数 
	console.log(Number.isInteger(10.2)); //false
	console.log(Number.isInteger(10)); //true
	console.log(Number.isInteger(10.0)); //true
	console.log(Number.isInteger('10.0')); //false
}

{
	console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
	console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
	//isSafeInteger判断数字是否在有效范围内
	console.log('10', Number.isSafeInteger(10)); //true
	console.log('a', Number.isSafeInteger('a')); //true
}

{
	//trunc判断小数的整数部分并返回
	console.log(Math.trunc(4.1));
	console.log(Math.trunc(4.9));
}

{
	//sign判断一个数是正数 负数还是0
	console.log(Math.sign(-5)); //-1
	console.log(Math.sign(0)); //
	console.log(Math.sign(5)); //10
	console.log(Math.sign('50')); //1
	console.log(Math.sign('foo')); //NaN
}

{
	//立方根
	console.log(Math.cbrt(-1)); //-1
	console.log(Math.cbrt(8)); //2
}

{
	//三角函数方法和对数方法

}