'use strict';

/**
 * @ngdoc directive
 * @name garderlefilApp.directive:navmen
 * @description
 * # navmen
 */
angular.module('garderlefilApp')
  .directive('navmenu', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, $location) {
        var menuItems= $(element).find('.menu-item');
        var subMenus = $(element).find('.submenu');
        
        scope.$on("$routeChangeSuccess", function (event, current, previous) {
        	if(!current.$$route)
        	 current = previous;

		    var curPath = '#' + (current.$$route.originalPath);
		    //add active to active path
		    angular.forEach(menuItems, function(value, key){
		    	var el = angular.element(value);
		    	if($(el).find('a').attr('href') === curPath)
		    		el.addClass('active');
		    	else if(el.hasClass('active'))
		    		el.removeClass('active');
		    });
		    //open or close concerned submenu items
		    angular.forEach(subMenus, function(value, key){
		    	var el = angular.element(value);
		    	var as = ($(el).find('a'));
		    	var active = false;
		    	angular.forEach(as, function(v, k){
		    		var a = angular.element(v);
		    		if(a.attr('href') === curPath){
		    			active = true;
		    		};
		    	});
		    	if(!active && !el.hasClass('closed'))
		    		el.addClass('closed');
		    	else if(active && el.hasClass('closed')) 
		    		el.removeClass('closed');
		    });
		});
      }
    };
  });
