'use strict';

describe('Controller: GeneseCtrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var GeneseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneseCtrl = $controller('GeneseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
