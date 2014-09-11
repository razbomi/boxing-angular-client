'use strict';

describe('Service: boxersModel', function () {

  // load the service's module
  beforeEach(module('angularGeneratedApp'));

  // instantiate service
  var boxersModel;
  beforeEach(inject(function (_boxersModel_) {
    boxersModel = _boxersModel_;
  }));

  it('should do something', function () {
    expect(!!boxersModel).toBe(true);
  });

});
