/*立即執行函數 */
/*IIFE模式:匿名函數自調用(閉包)*/
/*內部數據是私有的，想要使用要暴露出來 */
(function(window) {
  let msg = 'module3';
  function foo() {
    console.log('foo()', msg);
  }
  /*暴露 */ window.AAA = { foo: foo };
})(window);
/*聲明1個形參，注入一個實參 */
