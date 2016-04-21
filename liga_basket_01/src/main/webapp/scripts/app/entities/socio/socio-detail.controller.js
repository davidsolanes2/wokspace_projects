'use strict';

angular.module('ligaBasket01App')
    .controller('SocioDetailController', function ($scope, $rootScope, $stateParams, entity, Socio, Equipo) {
        $scope.socio = entity;
        $scope.load = function (id) {
            Socio.get({id: id}, function(result) {
                $scope.socio = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBasket01App:socioUpdate', function(event, result) {
            $scope.socio = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
