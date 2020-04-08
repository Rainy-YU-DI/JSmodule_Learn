//默認暴露(就不用像module1,module2那樣要指定暴露什麼東西出來):這邊可以直接暴露全部
//使用export default value(任意數據);
//export default只可以寫一次,不然會報錯
export default {
  msg: '默認暴露',
  foo() {
    console.log(this.msg);
  },
};
