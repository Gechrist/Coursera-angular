(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.text = "";
  $scope.message= "";
  $scope.check = function () {
    if ($scope.text.length == 0) {
        $scope.message = "Please enter data first";
        }
    else {
      var  list = $scope.text.split(",")
      if (list.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message= "Too much!";
      }
    }
  }
}

}) ();
