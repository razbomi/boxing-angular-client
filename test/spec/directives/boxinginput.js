'use strict';

describe('Directive: boxingInput', function () {

  // load the directive's module
  beforeEach(module('angularGeneratedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<boxing-input></boxing-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boxingInput directive');
  }));
});
