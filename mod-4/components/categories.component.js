( function (){
'use strict';

angular.module ('Data')
.component ('menuCategories',{
  templateUrl:"loader/categories.list.html",
  //controller: "MenuCategoriesController as menu",
  bindings:{
    categories: '<'
  }
});


})();
