(function ()
{
    'use strict';
    
    angular.module('myApp').controller('LocationController', 
    		function ($scope, $location, $routeParams, webId) {
    		
    	$scope.data = webId.getWeb();
//    	$scope.data = {
//    		phone: "917-504-9043",
//    	};
    	
//    	$scope.data.call = "tel:" + $scope.data.phone;
    	console.log("click", $scope.data);
    	
    	$scope.call = function() {
    		window.open('tel:917-504-9043');
    	};
	});
    

})();
