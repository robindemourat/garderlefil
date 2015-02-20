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
        			w += $(el).width() + 15;
        			angular.element(element).css({width : w+'px'});
        		});
        	}else if($(el).hasClass('objet')){
            var src = $(el).find('embed').attr('src');
            if(src.indexOf('vimeo') > -1)
              w += $(el).width()*2 + 10;
            else w += $(el).width() + 10;
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
