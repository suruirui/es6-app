//decorator修饰器  是一个函数 ，用来修改类的行为
// {
// 	//限制某属性为只读
// 	let readonly = function(target, name, descriptor) {
// 		descriptor.writable = false;
// 		return descriptor;
// 	}
// 	class Test {
// 		@readonly
// 		time() {
// 			return '2017-06-14'
// 		}
// 	}
// 	let t = new Test();
// 	// t.time = function() {
// 	// 	console.log('reset time');
// 	// }
// 	console.log(test.time());
// }

{
	let typename = function(target, name, descriptor) {
		target.myname = 'hello';
	}
	@typename
	class Test {

	}
	console.log('类修饰符', Test.myname);
	//第三方修饰器js库 core-decorators
}


{
	let log = (type) => {
		return (target, name, descriptor) => {
			let src_method = descriptor.value;
			descriptor.value = (...arg) => {
				src_method.apply(target, arg);
				console.log(`log${type}`);
			}
		}
	}

	class AD {
		@log('show')
		show() {
			console.log('ad is show');
		}
		@log('click')
		click() {
			console.log('ad is click');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();

}