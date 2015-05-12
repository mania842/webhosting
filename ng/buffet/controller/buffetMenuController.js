(function ()
{
    'use strict';
    
    angular.module('buffetModule').controller('BuffetMenuController', 
    		function ($http, $scope, $location, $routeParams, webId, $anchorScroll) {
    	$scope.isScrollTop = true;
    	$scope.data = webId.loadWebData($routeParams.homepage);
//    	$scope.data = webId.getWeb();
    	
    	
    	
    	$scope.menuBarClick = function(day, index) {
    		$location.hash(day);
    	    // call $anchorScroll()
    	    $anchorScroll();
    	};
    	
    	var em = function (input) {
		    var emSize = parseFloat($("body").css("font-size"));
		    return (emSize * input);
		};
		
		$anchorScroll.yOffset = em(8);
		var elementResult = document.getElementsByClassName('weekly-menu-fix')[0];
		
    	$scope.getTop = function() {
    		return {'top': elementResult.offsetHeight};
    	};
    	$scope.getPadding = function() {
    		var dailyMenu = document.getElementsByClassName('daily-menu')[0];
    		var top = dailyMenu.offsetHeight;
    		return {'padding-top': top};
    	};
    	
    	$scope.logResize = function () {
    		$scope.$apply();
//            console.log('element resized');
        };
	});
    

})();
