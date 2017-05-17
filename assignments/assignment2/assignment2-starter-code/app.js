  (function () {

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buy = this;
    buy.items = ShoppingListCheckOffService.getItemsToBuy();
    buy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
      console.log("bought");
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getItemsBoght();
  };

  function ShoppingListCheckOffService () {

    var service = this;

    var itemsToBuy = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "CupCakes",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBoght = function () {
      return itemsBought;
    };

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsBought.push(item);
      itemsToBuy.splice(itemIndex, 1);
    };

  };

})();
