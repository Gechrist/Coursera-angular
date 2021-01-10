(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();
  toBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  //   if (toBuy.items.length == 0){
  //     toBuy.emptyMessage = true;
  //   };
  //
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    {
      name: "milk", quantity: 1
    },
    {
      name: "chips", quantity: 4
    },
    {
      name: "cookies", quantity: 5
    },
    {
      name: "beers", quantity: 6
    },
    {
      name: "apples", quantity: 12
    }
  ];

  service.getItems = function() {
    return itemsToBuy;
  }

  var itemsBought = [];

  service.moveItem = function(itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getBoughtItems = function() {
    return itemsBought;
  }
}

}) ();
