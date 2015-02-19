'use strict';

describe('Controller: VueDEnsembleCtrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var VueDEnsembleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VueDEnsembleCtrl = $controller('VueDEnsembleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
