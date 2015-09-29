'use strict';

describe('Service: designComplexitySrvc', function () {

  // load the service's module
  beforeEach(module('nscwebappApp'));

  // instantiate service
  var designComplexitySrvc;
  beforeEach(inject(function (_designComplexitySrvc_) {
    designComplexitySrvc = _designComplexitySrvc_;
  }));

  it('should do something', function () {
    expect(!!designComplexitySrvc).toBe(true);
  });

});
