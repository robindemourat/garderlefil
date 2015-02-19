'use strict';

describe('Controller: NavmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var NavmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavmenuCtrl = $controller('NavmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
