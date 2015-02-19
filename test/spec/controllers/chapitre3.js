'use strict';

describe('Controller: Chapitre3Ctrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var Chapitre3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapitre3Ctrl = $controller('Chapitre3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
