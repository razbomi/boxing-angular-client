'use strict';

var angularGeneratedApp = angular.module('angularGeneratedApp')
angularGeneratedApp.controller('BoxersCtrl', function ($scope, $state, boxersModel, trainersModel) {
  $scope.boxers = boxersModel;
  $scope.trainers = trainersModel;

  $scope.removeBoxer = function (boxer) {
    console.log("Remove ", boxer);
    $scope.boxers.removeBoxer(boxer);
  }

  $scope.editBoxer = function (boxer) {
    console.log("Edit ", boxer);
    $scope.boxer = boxer;
    $state.go('boxers.detail', {registration: boxer.registration.number})
  }


});

angularGeneratedApp.controller('BoxerDetailCtrl', function ($scope, $state, registration, boxersModel, trainersModel) {
  $scope.boxers = boxersModel;
  $scope.trainers = trainersModel;

  $scope.saveBoxer = function () {
    console.log("Update detail for ", $scope.boxer, registration);
    $scope.boxers.registerNewBoxer($scope.boxer);
    $state.go('boxers');
  }

  $scope.cancel = function () {
    $state.go('boxers');
  }

});


angularGeneratedApp.controller('BoxerRegistrationCtrl', function ($scope, $state, boxersModel, trainersModel) {
  $scope.boxers = boxersModel;
  $scope.trainers = trainersModel;
  $scope.boxer = {};
  $scope.error = '';

  $scope.saveBoxer = function (userForm) {
    userForm.$setSubmitted();
    console.log('new boxer registration', userForm);
    if (userForm.$valid) {
      $state.go('boxers');
    } else {
      $scope.error = 'Please correct the errors below';
    }
  }

  $scope.cancel = function () {
    $state.go('boxers');
  }

});
