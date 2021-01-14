(function () {
'use strict';

angular.module('NarrowItDown', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: "loader/directive.html",
    scope: {
      items: '<',
      onRemove: '&'
      }
    };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.getItems = function (searchTerm){

  var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
  .then (function(response){menu.found = response;
    })
  }

  menu.removeItem = function(itemIndex) {
    menu.found.splice(itemIndex, 1);
    console.log (menu.found)
  }
}


MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var menuService = this;
  menuService.getMatchedMenuItems = function(searchTerm) {
      menuService.foundItems = [];
      return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    //  params: { description: searchTerm}
  }).then(function (response) {
    var origResp = response.data.menu_items;
    var i = 0;
    for (i = 0; i<origResp.length; i++){
    if (origResp[i].description.toLowerCase().indexOf(searchTerm) !== -1 && searchTerm !== ''){
      menuService.foundItems.push(origResp[i]);
      };
    };
      return menuService.foundItems;
    }).catch(function(error){
    console.log (error);
      });
  }
 }
}) ();
