( function (){
'use strict';

angular.module ('Data')
.component ('categoryItems',{
  templateUrl:"loader/items.list.html",
  bindings:{
    items: '<'
  }
});

})();
