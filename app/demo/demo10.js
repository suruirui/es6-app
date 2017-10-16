//Module 模块
// import {name,age,hello} from './stu.js';
// import * as stu from './stu.js'  //重命名导入
import Test from './stu.js'  //导入默认模块可以使用任意名称
// const {name,age,hello} = stu;  //解构对象

// console.log(name,age);
// hello(name,age);

Test('lisi',20);