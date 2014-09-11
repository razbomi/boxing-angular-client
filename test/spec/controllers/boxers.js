'use strict';

describe('Controller: BoxersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGeneratedApp'));

  var BoxersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoxersCtrl = $controller('BoxersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
