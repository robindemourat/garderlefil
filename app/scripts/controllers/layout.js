'use strict';

/**
 * @ngdoc function
 * @name garderlefilApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the garderlefilApp
 */
angular.module('garderlefilApp')
  .controller('LayoutCtrl', function ($scope, $location, $route, $rootScope) {

  	$scope.menuOut = true;
  	$scope.pagesList = [];

  	//getting the pages list for scrolling - I want it to be easily changeable so I used jquery and base on html rather than some data
  	$('.menu').find('a').each(function(i, el){
  		$scope.pagesList.push($(el).attr('href'));
  	});

  	$scope.$on('$routeChangeStart', function(next, current) { 
  		$scope.menuOut = true;
 	});

 	$scope.setViewClass = function(){
 		var out = "";

 		if($scope.menuOut)
 			out += 'col-sm-offset-2 col-sm-10 col-xs-offset-5 col-xs-7';
 		else
 			out += 'col-sm-offset-1 col-sm-11 col-xs-offset-1 col-xs-11';
 		out += " " + $scope.animationClass;

 		return out;
 	}

 	$scope.$on('upPage', function(){
 		$scope.animationClass = "slide-in-top slide-out-bottom";
 	});

 	$scope.$on('downPage', function(){
 		$scope.animationClass = "slide-in-bottom slide-out-top";
 	});

 	$scope.$on('noPage', function(){
 		$scope.animationClass = "slide-in-simple slide-out-simple";
 	});

 	//navigation
 	$scope.$on('$routeChangeSuccess', function(event, current, previous){
     $rootScope.title = $route.current.title;
			var index = $scope.getPageIndex();
			if(index < $scope.pagesList.length - 2)
 			 $scope.downUrl = $scope.pagesList[+index+1];
 			else $scope.downUrl = undefined;

 			if(index > 1)
 			 $scope.upUrl = $scope.pagesList[+index-1];
 			else $scope.upUrl = undefined;

      $('.view-container')[0].scrollLeft = 0;
 	});

 	$scope.getPageIndex = function(){
 		//getting the current index in playlist
 		var index;
 		for(var i in $scope.pagesList){
 			if($scope.pagesList[i] === '#'+$location.path())
 				index = i;
 		}
 		return index;
 	};

  $rootScope.keyUp

  });
