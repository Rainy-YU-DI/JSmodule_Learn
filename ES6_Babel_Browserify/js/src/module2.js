//統一暴露
function fun() {
  console.log('fun() module2');
}
function fun2() {
  console.log('fun2() module2');
}
//暴露為"對象"
export { fun, fun2 };
