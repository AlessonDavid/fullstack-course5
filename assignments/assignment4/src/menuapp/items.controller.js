(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'menuItems'];
function ItemsController(MenuDataService, menuItems) {
  var itemsCtrl = this;

  itemsCtrl.list = menuItems.menu_items;
  itemsCtrl.name = menuItems.category.name;
  console.log("menuItems" ,menuItems)
  console.log("itemCtrl.name" ,itemsCtrl.name)
  console.log("itemCtrl.list" ,itemsCtrl.list)

}

})();
