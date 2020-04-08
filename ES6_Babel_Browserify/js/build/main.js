'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//(應用主頁)引入其他模塊

//語法:import xxx from '路徑';
//XXX必須"確實指定"要引入的東西(用對象的方式填入)
//第3方暴露jQuery(跟默認暴露一樣XXX可以直接隨意取名，from 後為"包名字串")
(0, _module.foo)();
//module3默認暴露方法可以不用指定要引入的東西
//XXX可以隨意取名

(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();

_module4.default.foo();
(0, _jquery2.default)('body').css('background', 'green');