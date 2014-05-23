'use strict';

angular.module('angularGeneratedApp')
    .controller('NavCtrl', function ($scope, $location) {

        $scope.isActive = function (path) {
            return path === $location.path();
        };

    });
