'use strict';

angular.module('ligaBasket01App')
	.controller('SocioDeleteController', function($scope, $uibModalInstance, entity, Socio) {

        $scope.socio = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Socio.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
