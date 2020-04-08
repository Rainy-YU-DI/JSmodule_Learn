//定義一個沒有依賴模塊
define(function() {
  let name = 'dataService.js';
  function getName() {
    return name;
  }
  //暴露模塊
  return { getName: getName };
});
