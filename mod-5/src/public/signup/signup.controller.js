(function (){
'use strict';

angular.module ('public')
.controller ('SignupController', SignupController);

SignupController.$inject=['SignupService', 'MenuService'];
function SignupController(SignupService, MenuService){
  var signCtrl= this;
  signCtrl.message ='';

  signCtrl.storeInfo = function storeInfo(user) {

    signCtrl.response = MenuService.getItem(user.favitem.toUpperCase()).then(function (response){
    signCtrl.response = response;
    if (angular.equals(signCtrl.response, {})){
    signCtrl.message = "No such menu number exists";
    } else {
    user.favitemobject = signCtrl.response;
    SignupService.storeInfo(user);
    signCtrl.message = "Your information has been saved";}
  });
  };
}

})();
