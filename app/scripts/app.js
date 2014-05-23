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
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
