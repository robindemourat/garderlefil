'use strict';

/**
 * @ngdoc directive
 * @name garderlefilApp.directive:fitwidth
 * @description
 * # fitwidth
 */
angular.module('garderlefilApp')
  .directive('fitwidth', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var els = angular.element(element).children();
        var w = 0;
        angular.forEach(els, function(value, key){
        	var el = angular.element(value);
        	//console.log(el, el[0].tagName, el.width());
        	w += $(el).width() + 10;
        	if(el[0].tagName.toLowerCase() === 'img'){
        		el.bind("load" , function(e){ 
        			w += $(el).width() + 10;
        			angular.element(element).css({width : w+10+'px'});
        		});
        	}
        });
        angular.element(element).css({width : w+10+'px'});
      }
    };
  });
