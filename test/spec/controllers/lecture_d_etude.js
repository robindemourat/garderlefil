'use strict';

describe('Controller: LectureDEtudeCtrl', function () {

  // load the controller's module
  beforeEach(module('garderlefilApp'));

  var LectureDEtudeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LectureDEtudeCtrl = $controller('LectureDEtudeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
