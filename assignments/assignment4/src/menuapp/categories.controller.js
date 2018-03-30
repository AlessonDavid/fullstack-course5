(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService'];
  function CategoriesController(MenuDataService) {
    var menu = this;

    var promise = MenuDataService.getAllCategories();

    promise.then(function (response) {
      menu.categories = response.data;
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
})();
