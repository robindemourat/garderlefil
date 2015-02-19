'use strict';

/**
 * @ngdoc directive
 * @name garderlefilApp.directive:fitwidth
 * @description
 * # fitting width for text with horizontal layout
 */
angular.module('garderlefilApp')
  .directive('fitwidth', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, $window) {

        var w = angular.element($window);
       /* scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'height': (newValue.h - 100) + 'px',
                        'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);*/

        /*w.bind('resize', function () {
          console.log("resize");
            size();
        });*/
        window.onResize = size;

        var size = function(){
         //texts in blocks : getting actual width of elements
        var blocks = angular.element(element).find('.block-text');
        angular.forEach(blocks, function(value, key){
          var el = angular.element(value);
          var first = $(el).find('p:first-of-type');
          var last = $(el).find('p:last-of-type');
          var width = last.offset().left+last.width()  -first.offset().left;
          $(el).css({width : width + 'px'})
        });

        //getting container width
        var els = angular.element(element).children();
        var w = 0;
        angular.forEach(els, function(value, key){
        	var el = angular.element(value);
        	
        	if(el[0].tagName.toLowerCase() === 'img'){
        		el.bind("load" , function(e){ 
        			w += $(el).width() + 10;
        			angular.element(element).css({width : w+'px'});
        		});
        	}else if($(el).hasClass('objet')){
            w += $(el).width()*2 + 10;
            angular.element(element).css({width : w+'px'});
          }else{
            w += $(el).width() + 10;
            angular.element(element).css({width : w+'px'});
          }
        });
        
        };

        size();

       
      }
    };
  });
