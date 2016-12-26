(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.controller('BicycleController', ['$scope', '$location','$routeParams', 'BicyclesService',
            function ($scope, $location, $routeParams, bicyclesService) {
                $scope.isNew = !$routeParams.bicycleId;
                //alert($scope.isNew)
                $scope.bicycleTypes = bicyclesService.getBicycleTypes();
                var originalBicycle = null;
                //
                
                if ($scope.isNew) {
                    $scope.bicycle = bicyclesService.createBicycle();
                    //originalBicycle = bicyclesService.addBicycle();
                    $scope.formTitle = "Add New Bicycle";
                }
                else {
                    originalBicycle = bicyclesService.getBicycle($routeParams.bicycleId);
                    
                    originalBicycle.$promise.then(function () {
                        $scope.bicycle = angular.copy(originalBicycle);
                    });
                    $scope.formTitle = "Update Bicycle"
                }
                

                $scope.submit = function () {
                    if ($scope.isNew) {
                        bicyclesService.addBicycle($scope.bicycle).then(function () {
                            $location.path("/bicycles");
                        });

                    }
                    else {
                        angular.copy($scope.bicycle, originalBicycle);
                        originalBicycle=bicyclesService.updateBicycle(originalBicycle);
                        originalBicycle.$promise.then(function () {
                            $location.path("/bicycles");
                        });
                    }
                   
                };

                $scope.cancel = function () {
                    $location.path('/bicycles');
                };

                
            }
    ]);
})();