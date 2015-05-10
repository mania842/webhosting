/**
 * App Application module
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('sample', [ 'myApp' ]);

	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/', { templateUrl : 'ng/common/html/main.html' })
		.when('/test', { templateUrl : 'ng/common/html/test.html' })
		.otherwise({ redirectTo : '/' });
	});

	module.factory('page', function() {
		var title = 'default';
		console.log("page");

		return {
			title : function() {
				console.log("title", title);
				return title;
			},
			setTitle : function(newTitle) {
				title = newTitle;
			}
		};
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		console.log("$location.path()", $location.path());
		$scope.page = page;
	});

})();
