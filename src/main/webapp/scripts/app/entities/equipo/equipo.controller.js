'use strict';

angular.module('ligaBasket01App')
    .controller('EquipoController', function ($scope, $state, Equipo) {

        $scope.equipos = [];
        $scope.loadAll = function() {
            Equipo.query(function(result) {
               $scope.equipos = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.equipo = {
                id: null
            };
        };
    });
