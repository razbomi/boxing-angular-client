'use strict';

describe('Service: trainersModel', function () {

  // load the service's module
  beforeEach(module('angularGeneratedApp'));

  // instantiate service
  var trainersModel;
  beforeEach(inject(function (_trainersModel_) {
    trainersModel = _trainersModel_;
  }));

  it('should do something', function () {
    expect(!!trainersModel).toBe(true);
  });

});
