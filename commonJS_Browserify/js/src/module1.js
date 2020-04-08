//module.exports=value 暴露一個對象
module.exports = {
  msg: 'module1',
  foo() {
    console.log(this.msg);
  },
};
