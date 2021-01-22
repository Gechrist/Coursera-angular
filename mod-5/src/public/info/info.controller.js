(function(){
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject=['SignupService'];

function InfoController(SignupService) {
  var infoCtrl = this;
      infoCtrl.user = {};

      infoCtrl.user = SignupService.getInfo();
      console.log(SignupService.getInfo());
      if (angular.equals (infoCtrl.user, {})){
        infoCtrl.show = false;
      } else{
        infoCtrl.show = true;
      }

}


})();
