(function () {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService ($http, ApiBasePath) {
  	var service = this;
  	var categories = [];

  	service.getAllCategories = function () {
  		var response =  $http ({
  			method: "GET",
  			url: (ApiBasePath + "/categories.json")
  		});

      return response;
  	};

    service.getItemsForCategory = function (shortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: shortName
        }
      })
      .then(function (response) {
        return response.data;
      });

      return response;
    };

  }

})();
