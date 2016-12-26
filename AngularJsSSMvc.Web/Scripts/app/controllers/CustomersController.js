(function () {
    var app = angular.module('myApp');
    app.controller('CustomersController', ['$scope','CustomersService', function ($scope,customersService) {
        $scope.customers = customersService.getCustomers();
    }]);
})();