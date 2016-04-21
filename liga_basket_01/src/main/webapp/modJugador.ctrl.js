/**
 * Created by david on 11/04/16.
 */

'use strict'
angular.module('ligaBasket01App')
.controller('modificacionCtrl', function ($scope, Jugador, Equipo, entity) {
    $scope.allJugadores = entity;
    $scope.jugadorSel;
    $scope.equipos = Equipo.query();

    $scope.cargarJugador = function (id) {
        Jugador.get({id: id}, function (result) {
            $scope.jugadorSel = result;
        });
    };
    $scope.update = function () {
       Jugador.update($scope.jugadorSel, updateOk);
    };
    var updateOk = function () {
        $scope.allJugadores = Jugador.query();
    }
})

.factory("Jugador", function($resource) {
    return $resource('api/jugadors/:id', {}, {
        'query': {method: 'GET', isArray:true},
        'get': {
            method:'GET',
            transformRespnse: function (data) {
                data = angular.fromJson(data);
                return data;
            }
        },
        'update': {
            method: 'PUT',
            transformRequest: function (data) {
                return angular.toJson(data);
            }
        }
    });
});
