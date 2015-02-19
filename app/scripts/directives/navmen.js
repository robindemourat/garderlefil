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
        
        scope.$on("$routeChangeStart", function (event, current, previous) {
        	if(!current || !current.$$route)
        	 current = previous;
        	else if(!previous || !previous.$$route)
        	 previous = current;

		    var curPath = '#' + (current.$$route.originalPath);
		    var prevPath = '#' + (previous.$$route.originalPath);
		    //add active to active path and determine if up or down
		    angular.forEach(menuItems, function(value, key){
		    	i++;
		    	var el = angular.element(value);
		    	if($(el).find('a').attr('href') === curPath){
		    		curI = i;
		    		el.addClass('active');
		    	}else if(el.hasClass('active'))
		    		el.removeClass('active');
		    	if($(el).find('a').attr('href') === prevPath){
		    		prevI = i;
		    	};
		    });

		    //get if up or down
		    var i = 0, curI, prevI;
		    angular.forEach($(element).find('a'), function(value, key){
		    	i++;
		    	var el = angular.element(value);
		    	if($(el).attr('href') === curPath)
		    		curI = i;
		    	else if($(el).attr('href') === prevPath)
		    		prevI = i;
		    });

		    if(curI > prevI){
		    	scope.$emit('downPage');
		    }else if(curI < prevI){
		    	scope.$emit('upPage');
		    }
		    
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
