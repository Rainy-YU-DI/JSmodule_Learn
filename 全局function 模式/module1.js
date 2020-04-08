/*全局函數模式:將不同功能分裝成不同的全局函數；全局變數可能會被汙染*/
let msg = 'module1';
function foo() {
  console.log('foo()', msg);
}
function bar() {
  console.log('bar()', msg);
}
