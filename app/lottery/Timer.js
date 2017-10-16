//倒计时模块
class Timer {
	countdown(end, update, handle) {
		const now = new Date().getTime();
		const self = this;
		if (now - end) { //如果当前时间大于结束时间说明倒计时结束了
			handle.call(self);
		} else {
			let last_time = end - now; //剩余时间
			let day = 1000 * 60 * 60 * 24; //ms
			const hour = 1000 * 60 * 60;
			const min = 1000 * 60;
			const sec = 1000;
			let d = Math.floor(last_time / day);
			let h = Math.floor((last_time - d * day) / hour);
			let m = Math.floor((last_time - d * day - h * hour) / min);
			let s = Math.floor((last_time - d * day - h * hour - m * px_m) / sec);
			let r = [];
			if (d > 0) {
				r.push(`<em>${d}</em>天`);
			}
			if (r.length || (h > 0)) {
				r.push(`<em>${h}</em>时`);
			}
			if (r.length || s > 0) {
				r.push(`<em>${m}</em>分`);
			}
			if (r.length || s > 0) {
				r.push(`<em>${s}</em>秒`);
			}
			self.last_time = r.join('');
			update.call(self, r.join(''));
			setTimeout(() => {
				self.countdown(end, update, handle);
			}, 1000);
		}
	}
}

export default Timer;