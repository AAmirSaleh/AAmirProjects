(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.factory('BicyclesService', ['$resource', function ($resource) {
        var bicycleTypes = [
              { id: 1, name: "Road Bike" },
              { id: 2, name: "Mountain Bike" },
              { id: 3, name: "Urban Bike" },
              { id: 4, name: "Children Bike" }
        ];

        //var bicycles = [
        //            { id: 1, name: "Very fast bike", type: 1, typeName: "Road Bike", quantity: 5, rentPrice: 15 },
        //            { id: 2, name: "Very springy bike", type: 2, typeName: "Mountain Bike", quantity: 20, rentPrice: 17 },
        //            { id: 3, name: "Very classy bike", type: 3, typeName: "Urban Bike", quantity: 20, rentPrice: 14 },
        //            { id: 4, name: "Very colorful bike", type: 4, typeName: "Children Bike", quantity: 20, rentPrice: 9 }
        //];

        var BicycleResource = $resource('sss/bicycles/:bicycleId', null,
            {
                'update': { method: 'PUT' }
            });

        var updateBicycleTypeName = function (bicycle) {
            angular.forEach(bicycleTypes, function (bicycleType) {
                if (bicycleType.id == bicycle.type) {
                    bicycle.typeName = bicycleType.typeName;
                }
            });
        };

        return {
            getBicycles: function () {
                //var a = BicycleResource.query();
                //console.log(a);
                return BicycleResource.query();
            },
            getBicycle: function (bicycleId) {
                var a = BicycleResource.get({ bicycleId: bicycleId });
                //console.log(a);
                //return a;
                return BicycleResource.get({ bicycleId: bicycleId });
            },

            getBicycleTypes: function () {
                return bicycleTypes;
            },
            createBicycle: function () {
                return new BicycleResource({
                    type: bicycleTypes[0].id,
                    typeName: bicycleTypes[0].name,
                    quantity: 1,
                    rentPrice: 10
                });
            },

            addBicycle: function (bicycle) {
                updateBicycleTypeName(bicycle);
                return bicycle.$save();
            },

            updateBicycle: function (bicycle) {
                updateBicycleTypeName(bicycle);
                return BicycleResource.update({ bicycleId: bicycle.id }, bicycle);
            }
        };
    }]);
})();