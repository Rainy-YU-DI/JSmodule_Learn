//定義一個有依賴的模塊
define(['dataService', 'jquery'], function(dataService, $) {
  let msg = 'alerter.js';
  function showMsg() {
    console.log(msg, dataService.getName());
  }
  //要寫在return 前面
  $('body').css('background', 'pink');
  //暴露模塊
  return { showMsg };
});
