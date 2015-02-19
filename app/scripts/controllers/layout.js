'use strict';

/**
 * @ngdoc function
 * @name garderlefilApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the garderlefilApp
 */
angular.module('garderlefilApp')
  .controller('LayoutCtrl', function ($scope, $location) {
  	$scope.menuOut = true;

  	$scope.$on('$routeChangeStart', function(next, current) { 
  		$scope.menuOut = true;
 	});
  });
