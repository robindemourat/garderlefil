'use strict';

describe('Controller: Chapitre2Ctrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var Chapitre2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapitre2Ctrl = $controller('Chapitre2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
