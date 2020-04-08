//定義一個沒有依賴模塊
(function(window) {
  let name = 'dataService.js';
  function getName() {
    return name;
  }
  window.dataService = { getName: getName };
})(window);
