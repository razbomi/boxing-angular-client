'use strict';

angular.module('angularGeneratedApp')
    .controller('BoxersCtrl', function ($scope, boxersModel, trainersModel) {
        $scope.boxers = boxersModel;
        $scope.trainers = trainersModel;

        // TODO: test me you lazy f8ker
        $scope.formState = {showBoxerForm: false, boxer: {}};
        $scope.addBoxer = function () {
            $scope.formState.showBoxerForm = true;
        }

        $scope.saveBoxer = function () {
            $scope.boxers.registerNewBoxer($scope.formState.boxer);
            $scope.formState.showBoxerForm = false;
            $scope.formState.boxer = {};
        }
    });
