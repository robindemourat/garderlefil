'use strict';

describe('Controller: MemoiresCtrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var MemoiresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemoiresCtrl = $controller('MemoiresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
