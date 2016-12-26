(function () {
    "use strict";

    var myAppModule = angular.module('myApp');
    myAppModule.controller('BicyclesController', ['$scope','BicyclesService',
    function ($scope,BicyclesService) {
        $scope.bicycles = BicyclesService.getBicycles();
        var bs = BicyclesService.getBicycles();
        
        console.log(bs);
    }]);
})();
