(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'shortName'];
function ItemsController(MenuDataService, shortName) {
  var menu = this;

  var promise = MenuDataService.getItemsForCategory(shortName);

  promise.then(function (response) {
    menu.items = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  // menu.logMenuItems = function (shortName) {
  //   var promise = MenuDataService.getItemsForCategory(shortName);
  //
  //   promise.then(function (response) {
  //     console.log(response);
  //     menu.items = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };

}


// CategoriesController.$inject = ['MenuDataService', 'items'];
// function CategoriesController(MenuDataService, items) {
//   var categories = this;
//   categories.items = items;
// }

})();
