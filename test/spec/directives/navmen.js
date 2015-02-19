'use strict';

describe('Directive: navmen', function () {

  // load the directive's module
  beforeEach(module('garderlefilApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navmen></navmen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navmen directive');
  }));
});
