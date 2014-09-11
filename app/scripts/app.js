'use strict';

angular
  .module('angularGeneratedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/boxers', {
        templateUrl: 'views/boxers.html',
        controller: 'BoxersCtrl'
      })
      .when('/trainers', {
        templateUrl: 'views/trainers.html',
        controller: 'TrainersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
