(function ()
{
    'use strict';
    
    angular.module('myApp').controller('LocationController', 
    		function ($scope, $location, $routeParams, webId, appService) {
    		
    	$scope.data = webId.getWeb();
    	$scope.logResize = function () {
    		$scope.$apply();
        };
    	
    	$scope.clickOnPhone = function() {
    		if (appService.isDevice)
    			window.open($scope.data.CALL);
    	};
    	
    	$scope.setMapHeight = function() {
    		var ele = document.getElementsByClassName('app-ngview')[0];
    		return { "max-height" : ele.offsetHeight/2};
    	};
	});
    

})();
