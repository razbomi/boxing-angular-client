'use strict';

describe('Controller: TrainersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGeneratedApp'));

  var TrainersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrainersCtrl = $controller('TrainersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
