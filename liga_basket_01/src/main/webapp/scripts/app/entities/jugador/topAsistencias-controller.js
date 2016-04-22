/**
 * Created by david on 21/04/16.
 */

'use strict';

angular.module('ligaBasket01App')
    .controller('TopAsistenciasController', function ($scope, $rootScope, $stateParams, entity, Jugador, Equipo, ParseLinks) {
        entity.$promise.then(function (data) {
            console.log(data);
            var link = entity.$httpHeaders('link');

            $scope.links = ParseLinks.parse(link);

            $scope.savedPlayers = data;
        });
    });
