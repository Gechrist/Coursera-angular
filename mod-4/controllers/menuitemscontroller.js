(function () {
'use strict';

angular.module('Data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject =['items'];
function MenuItemsController(items){
  var menu = this;

  menu.items = items;
  console.log(menu.items);
  };

})();
