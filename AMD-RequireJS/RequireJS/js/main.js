//引入模塊
(function() {
  requirejs.config({
    baseUrl: 'js/', //出發點在根目錄下的...
    paths: {
      //配置路徑
      dataService: './modules/dataService', //默認會自行在最後加上.js
      alerter: './modules/alerter', //默認會自行在最後加上.js
      jquery: './libs/jquery-3.4.1.min', //第3方jQuery在AMD時要用小寫jquery
    },
  });
  //只需要引入alerter即可，alerter內的dataService會由config去找
  requirejs(['alerter'], function(alerter) {
    alerter.showMsg();
  });
})();
