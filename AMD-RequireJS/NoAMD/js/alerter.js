//定義一個有依賴的模塊
(function(window, dataService) {
  let msg = 'alert.js';
  function showMsg() {
    console.log(msg, dataService.getName());
  }
  window.alerter = { showMsg };
})(window, dataService);
