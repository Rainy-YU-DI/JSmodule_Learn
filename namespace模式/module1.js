/*namespace模式:簡單"對象"封裝 */
/*對象裡的數據msg依舊可以被操作~不安全 */
let obj = {
  msg: 'module2',
  foo() {
    console.log('foo()', this.msg);
  },
};
