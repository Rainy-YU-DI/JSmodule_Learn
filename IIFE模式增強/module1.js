/*立即執行函數增強 */
/*IIFE模式增強:引入依賴*/
/*現代模塊實現的基石 */
(function(window, $) {
  /*聲明1個形參*/
  let msg = 'module4';
  function foo() {
    console.log('foo()', msg);
  }
  /*暴露 */ window.aaa = foo;
  $('body').css('background', 'red');
})(window, jQuery); /*注入一個實參 */
/* jQuery不要寫錯大小寫 */
