

(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('RentalController', ['$scope', '$location','$routeParams', 'BicyclesService', 'CustomersService', 'RentalService', function (
        $scope, $location,$routeParams, bicyclesService, customersService, rentalService) {

        $scope.isNew = !$routeParams.rentalId;

        $scope.bicycles = bicyclesService.getBicycles();
        $scope.customers = customersService.getCustomers();

        var originalRental = null;

        if ($scope.isNew) {
            $scope.rental = {};
            $scope.formTitle = "Add new rental";
        }
        else {
            originalRental = rentalService.getRental($routeParams.rentalId);
            console.log(originalRental.customerId);
            $scope.rental = angular.copy(originalRental);
            $scope.formTitle = "Update rental";
        }
        
        //console.log($scope.rental);
        
        //window.alert($routeParams.rentalId);
        $scope.submit = function () {
            if ($scope.isNew) {
                rentalService.addRental($scope.rental);
            }
            else {
                angular.copy($scope.rental, originalRental);
                rentalService.updateRental(originalRental);
            }

            $location.path("/rentals");
        }

        $scope.cancel = function () {
            $location.path("/rentals");
        }

        $scope.updateBicycle = function () {
            rentalService.updateRentalBicycle($scope.rental);
            rentalService.updateRentalTotalPrice($scope.rental);
        }
        
        $scope.updateTotalPrice= function() {
            rentalService.updateRentalTotalPrice($scope.rental);
        }
    }]);
})();