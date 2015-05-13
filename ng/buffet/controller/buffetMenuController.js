(function ()
{
    'use strict';
    
    angular.module('buffetModule').controller('BuffetMenuController', 
    		function ($http, $scope, $location, $routeParams, webId, $anchorScroll, appService) {
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
    	$scope.getPadding = function(isIOS) {
    		var dailyMenu = document.getElementsByClassName('daily-menu')[0];
    		
    		var top = dailyMenu.offsetHeight;
    		if (isIOS)
    			top += em(2);
    		
    		console.log("appService.isLandscape()", appService.isLandscape());
    		return {'padding-top': top};
    	};
    	
    	$scope.logResize = function () {
    		$scope.$apply();
//            console.log('element resized');
        };
	});
    

})();
