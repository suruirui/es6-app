//set 不重复数组
let langs = new Set('jsp');
console.log(langs);
langs.add('c');
langs.add('c');
console.log(langs);
console.log(langs.size);
console.log(langs.has('s'));
langs.delete('j');
console.log(langs);

langs.forEach(lang=>{
	console.log(lang);
});

langs.clear();
console.log(langs);

//map 键值对
let stu = new Map();
console.log(stu);

stu.set('001','jack');
stu.set('002','marry');
stu.set('003','xiaoming');

stu.set('001','lisa');

console.log(stu);
console.log(stu.size);
console.log(stu.get('001'));
// console.log(stu.get('jack'));  //undefined
console.log(stu.has('001'));

stu.forEach((value,key)=>{
	console.log(`${key}:${value}`);
	// console.log(`${value}`);
});

stu.clear();
console.log(stu);
