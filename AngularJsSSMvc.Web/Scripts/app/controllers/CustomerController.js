(function () {
    var app = angular.module('myApp');

    app.controller('CustomerController', ['$scope', '$location', '$routeParams', 'CustomersService',
        function ($scope, $location,$routeParams, customersService) {
            $scope.isNew = !$routeParams.customerId;

            var originalCustomer = null;
            if ($scope.isNew) {
                $scope.formTitle = 'Add New Customer';
                $scope.customer = {};
            }
            else {
                originalCustomer = customersService.getCustomer($routeParams.customerId);
                $scope.customer = angular.copy(originalCustomer);
                $scope.formTitle = 'Update Customer';
            }
            
            $scope.submit = function () {
                if ($scope.isNew) {
                    $scope.customer = customersService.addCustomer($scope.customer);
                }
                else {
                    angular.copy($scope.customer, originalCustomer);
                }
                $location.path('/customers')
            }

            $scope.cancel = function () {
                $location.path('/customers')
            }
    }]);
})();