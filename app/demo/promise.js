//promise异步编程的解决方案
//什么是异步 promise的作用 Promise 的基本用法
{
	//模拟ajax的过程
	let ajax = function(callback) {
		console.log("执行");
		//获取到数据之后执行回调
		setTimeout(() => {
			callback && callback.call();
		}, 1000);
	};
	ajax(function() {
		console.log('timeout1');
	});
}

{
	//模拟ajax 使用promise
	let ajax = () => {
			console.log("执行2");
			//返回Promise实例
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 1000);
			});
		}
		//Promise的then方法中传入下一步执行的函数
	ajax().then(() => {
		console.log('promise', 'timeout2');
	});
}

{
	let ajax = () => {
			console.log("执行2");
			//返回Promise实例
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 1000);
			});
		}
		//Promise的then方法中传入下一步执行的函数
	ajax().then(() => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
	}).then(() => { //下一步的下一步
		console.log('timeout3');
	});
}

{
	//异步捕获异常
	let ajax = (num) => {
		console.log('执行4');
		return new Promise((resolve, reject) => {
			if (num > 5) {
				resolve()
			} else {
				throw new Error('出错了')
			}
		});
	}

	ajax(6).then(() => {
		console.log(6);
	}).catch((err) => {
		console.log('catch', err);
	});

	ajax(3).then(() => {
		console.log(3);
	}).catch((err) => {
		console.log('catch', err);
	});
}

{
	//all 
	//所有图片都加载完再添加到页面
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = () => {
				resolve(img);
			}
			img.onerror = (err) => {
				reject(err);
			}
		});
	}

	function showImg(imgs) {
		imgs.forEach((img) => {
			document.body.appendChild(img);
		})
	}
	//all表示把多个Promise实例当成1个Promise实例
	//全部加载才会显示到页面
	Promise.all([
		loadImg('http://t.cn/RSeHbM9'),
		loadImg('http://t.cn/RSeHwk5'),
		loadImg('http://t.cn/RSeTeDn')
	]).then(showImg);
}

{
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = () => {
				resolve(img);
			}
			img.onerror = (err) => {
				reject(err);
			}
		});
	}

	function showImgs(img) {
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	//race 表示某个状态率先改变就先显示 剩余的忽略不管
	Promise.race([
		loadImg('http://t.cn/RSeHbM9'),
		loadImg('http://t.cn/RSeHwk5'),
		loadImg('http://t.cn/RSeTeDn')
	]).then(showImgs)
}