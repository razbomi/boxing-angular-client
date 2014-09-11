'use strict';

describe('Service: clubssModel', function () {

  // load the service's module
  beforeEach(module('angularGeneratedApp'));

  // instantiate service
  var clubssModel;
  beforeEach(inject(function (_clubssModel_) {
    clubssModel = _clubssModel_;
  }));

  it('should do something', function () {
    expect(!!clubssModel).toBe(true);
  });

});
