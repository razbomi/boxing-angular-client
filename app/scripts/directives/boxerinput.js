'use strict';

angular.module('angularGeneratedApp')
  .directive('boxerInput', function () {
    return {
      // https://docs.angularjs.org/api/ng/directive/input
      //template: '<div>Booo</div>',
      templateUrl: '/views/boxerinput.html',
      restrict: 'E',
      replace: true,
      scope: {
        fieldId: '@name', // There is @, =, &
        model: '=model',
        form: '=form',
        label: '@label',
        placeholder: '@placeholder',
        help: '@help'

      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the boxingInput directive');
      }
    };
  });
