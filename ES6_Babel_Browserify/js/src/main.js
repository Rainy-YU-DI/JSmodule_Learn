//(應用主頁)引入其他模塊

//語法:import xxx from '路徑';
//XXX必須"確實指定"要引入的東西(用對象的方式填入)
//第3方暴露jQuery(跟默認暴露一樣XXX可以直接隨意取名，from 後為"包名字串")
import $ from 'jquery';
import { bar, foo } from './module1';
import { fun, fun2 } from './module2';
//module3默認暴露方法可以不用指定要引入的東西
//XXX可以隨意取名
import module3 from './module3';

foo();
bar();
fun();
fun2();

module3.foo();
$('body').css('background', 'green');
