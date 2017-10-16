//解构参数
function breakfast(dessert,drink,{location,restaurant}){
	console.log(dessert,drink,location,restaurant);
}

breakfast('油条','豆浆',{location:'长治',restaurant:'拉面'});

//函数的名字 name属性
let fn = function add(){

}
console.log(fn.name);



//箭头函数
let f = n => n;
console.log(f(2));
console.log(f.name);

let test = (n,m) => n+m;
console.log(test('hello','world'));

