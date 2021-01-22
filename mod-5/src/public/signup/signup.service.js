(function(){
'use strict';

angular.module('public').
service ('SignupService', SignupService);

//SignupService.$inject=['signupForm'];

function SignupService (){
    var service = this;
     service.user = {};

    service.storeInfo = function storeInfo(user){
      service.user.fname = user.fname;
      service.user.lname = user.lname;
      service.user.email = user.email;
      service.user.phone = user.phone;
      service.user.favitemobject = user.favitemobject;
    }

      service.getInfo = function  getinfo() {
        return service.user;
    }

}


})();
