(function () {
'use strict';

angular.module('Data').
service ('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http){
var menuservice = this;

menuservice.getAllCategories = function() {
  menuservice.categories = [];
  return $http({
    method:'GET',
    url:('https://davids-restaurant.herokuapp.com/categories.json')})
  .then(function (response){
    menuservice.categories = response.data;
    return menuservice.categories;
  });
}

menuservice.getItemsForCategory = function(categoryShortName) {
  menuservice.items = [];
  return $http({
    method:'GET',
    url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName})
    .then(function (response){
      menuservice.items=response.data.menu_items;
      return menuservice.items;
    });
  };
};

})();
