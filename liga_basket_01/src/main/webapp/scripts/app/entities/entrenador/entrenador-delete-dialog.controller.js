'use strict';

angular.module('ligaBasket01App')
	.controller('EntrenadorDeleteController', function($scope, $uibModalInstance, entity, Entrenador) {

        $scope.entrenador = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Entrenador.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
