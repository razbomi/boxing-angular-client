'use strict';

angular
  .module('angularGeneratedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        //views: {
        //  "navigation": { template: 'hello'}
        //}
      })
      .state('boxers', {
        url: '/boxers',
        templateUrl: 'views/boxers.html',
        controller: 'BoxersCtrl',
      })
      .state('boxer', {
        url: '/boxers/registrations',
        templateUrl: 'views/boxerRegistration.html',
        controller: 'BoxerRegistrationCtrl'
      })
      .state('boxers.detail', {
        url: '/{registration:[0-9]{1,8}}',
        params: {registration: null},
        templateUrl: 'views/boxerDetail.html',
        controller: 'BoxerDetailCtrl',
        resolve: {
          registration: ['$stateParams', function ($stateParams) {
            return $stateParams.registration;
          }]
        }
      })
      .state('trainers', {
        url: '/trainers',
        templateUrl: 'views/trainers.html',
        controller: 'TrainersCtrl'
      });
  });
