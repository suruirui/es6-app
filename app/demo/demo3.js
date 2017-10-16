//字符串模板
let dessert ='油条',drink='豆浆';

let breakfast = `今天的早餐是
${dessert}和
${drink}!`;
console.log(breakfast);

//字符串扩展方法 startsWith开始 endsWith结尾 includes包含
let bool;
bool = breakfast.startsWith('今天');
bool = breakfast.endsWith('昨天');
bool = breakfast.includes('明天');
console.log(bool);