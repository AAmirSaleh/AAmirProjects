(function () {
    var myAppModule = angular.module('myApp');

    myAppModule.controller('RentalsController', ['$scope', 'RentalService', function ($scope, rentalService) {
        $scope.rentals = rentalService.getRentals();
        console.log($scope.rentals);
    }]);
})();