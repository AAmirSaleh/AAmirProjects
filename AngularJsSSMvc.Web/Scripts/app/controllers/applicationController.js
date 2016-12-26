(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.controller('applicationController', 
            function ($scope) {
                $scope.isMainMenuCollapsed = false;
                //$scope.serverSideData = serverSideData;
            }
    );
})();