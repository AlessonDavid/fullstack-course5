(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkDishes = function () {
      if ($scope.dishes == null) {
        return $scope.message = "Please enter data first!"
      }
      var arrayOfStrings  = $scope.dishes.split(',');
      verifyDishes(arrayOfStrings);
    }

    function verifyDishes(arrayOfStrings) {
      if (arrayOfStrings.length <= 3) {
        return $scope.message = "Enjoy!";
      } else {
        return $scope.message = "Too much!";
      }

    }

  }

})();
