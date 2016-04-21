'use strict';

angular.module('ligaBasket01App').controller('SocioDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Socio', 'Equipo',
        function($scope, $stateParams, $uibModalInstance, entity, Socio, Equipo) {

        $scope.socio = entity;
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Socio.get({id : id}, function(result) {
                $scope.socio = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBasket01App:socioUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.socio.id != null) {
                Socio.update($scope.socio, onSaveSuccess, onSaveError);
            } else {
                Socio.save($scope.socio, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
