/**
 * Common App Application module
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('myApp', [ 'ngRoute', 'ngSanitize', 'buffetModule' ]);

	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/', { templateUrl : 'ng/common/html/main.html' })
		.when('/test', { templateUrl : 'ng/common/html/test.html' })
		.when('/location/:homepage', {
			templateUrl: 'ng/common/html/location.html',
			controller: 'LocationController'
		}).when('/about/:homepage', {
			templateUrl: 'ng/common/html/about.html',
			controller: 'AboutController'
		})
		.otherwise({ redirectTo : '/' });
	});

	module.factory('page', function() {
		var title = 'default';

		return {
			title : function() {
				return title;
			},
			setTitle : function(newTitle) {
				title = newTitle;
			}
		};
	});
	
	module.run(function($rootScope, $location, webId) {
		console.log("$location.absUrl()", $location.absUrl());
		
		if ($location.absUrl().indexOf("gainesvillehomecooking.com") > -1) {
			$location.path('/buffet/menu/gainesvillehomecooking');
			webId.loadWebData("gainesvillehomecooking");
		} else if ($location.absUrl().indexOf("gainesvillehomecooking") > -1) {
//			$location.path('/buffet/menu/gainesvillehomecooking');
			webId.loadWebData("gainesvillehomecooking");
		}
		
		$rootScope.admin = {
    		web : webId.web,
        };
	});
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		$scope.page = page;
	});

})();
