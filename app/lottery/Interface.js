//数据计算模块 调用后台接口
import $ from 'jquery';

class Interface {
	/*
		获取遗漏数据
		当前期号 issue
	*/
	getOmit(issue) {
		//this处理
		let self = this;
		//Promise处理异步操作
		return new Promise((resolve, reject) => {
			$.ajax({
				url: '/get/omit',
				method: 'get',
				dataType: 'json',
				data: {
					issue: issue
				},
				success: (res) => {
					self.setOmit(res.data);
					resolve.call(self, res);
				},
				error: (err) => {
					reject.call(err);
				}
			});
		});
	}

	//获取开奖号码
	//期号 issue
	getOpenCode(issue) {
			let self = this;
			return new Promise((resolve, reject) => {
				$.ajax({
					url: '/get/opencode',
					method: '',
					data: {
						issue: issue
					},
					dataType: 'json',
					success: (res) => {
						self.setOpenCode(res.data);
						resolve.call(self, res);
					},
					error: (err) => {
						reject.call(err);
					}
				});
			});
		}
		//获取彩票状态
	getState(issue) {
		let self = this;
		return new Promise((resolve, reject) => {
			$.ajax({
				url: '/get/state',
				data: {
					issue: issue
				},
				dataType: 'json',
				success: (res) => {
					resolve.call(self, res);
				},
				error: (err) => {
					reject.call(err);
				}
			});
		}));
}
}
export default Interface;