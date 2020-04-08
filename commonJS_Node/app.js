//將其他的模塊匯集到主模塊
let uniq = require('uniq');

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

module1.foo();
module2();

module3.foo();
module3.bar();

let result = uniq(module3.arr);
console.log(result);

//先指到根目錄( C:\Users\pusc\Desktop\JSmodule\commonJS_Node)後再輸入"node app.js"
