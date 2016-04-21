'use strict';

angular.module('ligaBasket01App').controller('EquipoDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Equipo',
        function($scope, $stateParams, $uibModalInstance, entity, Equipo) {

        $scope.equipo = entity;
        $scope.load = function(id) {
            Equipo.get({id : id}, function(result) {
                $scope.equipo = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBasket01App:equipoUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.equipo.id != null) {
                Equipo.update($scope.equipo, onSaveSuccess, onSaveError);
            } else {
                Equipo.save($scope.equipo, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.datePickerForFechaCreacion = {};

        $scope.datePickerForFechaCreacion.status = {
            opened: false
        };

        $scope.datePickerForFechaCreacionOpen = function($event) {
            $scope.datePickerForFechaCreacion.status.opened = true;
        };
}]);
