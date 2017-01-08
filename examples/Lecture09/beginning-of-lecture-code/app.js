(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope) {
  $scope.name = "Yaakov";
}

function AnnonateMe (name, job, blah) {
  return "Blah";
}

console.log.(AnnonateMe())
})();
