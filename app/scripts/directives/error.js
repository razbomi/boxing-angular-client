'use strict';

angular.module('angularGeneratedApp')
  .directive('error', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the error directive');
      }
    };
  });
