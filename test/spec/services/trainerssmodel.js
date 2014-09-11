'use strict';

describe('Service: trainerssModel', function () {

  // load the service's module
  beforeEach(module('angularGeneratedApp'));

  // instantiate service
  var trainerssModel;
  beforeEach(inject(function (_trainerssModel_) {
    trainerssModel = _trainerssModel_;
  }));

  it('should do something', function () {
    expect(!!trainerssModel).toBe(true);
  });

});
