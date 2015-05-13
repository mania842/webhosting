/**
 * Common App Application module
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('myApp', [ 'ngRoute', 'ngSanitize', 'buffetModule' ]);

	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/', { /*templateUrl : 'ng/common/html/main.html'*/
			redirectTo: '/buffet/menu/gainesvillehomecooking',
			resolve: {
				myVar: function (webId) {
					webId.loadWebData("gainesvillehomecooking");
				}
				
			}
		})
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
	
	module.run(function($rootScope, $location, webId, appService) {
		if ($location.absUrl().indexOf("gainesvillehomecooking.com") > -1) {
			$location.path('/buffet/menu/gainesvillehomecooking');
			webId.loadWebData("gainesvillehomecooking");
		} else if ($location.absUrl().indexOf("gainesvillehomecooking") > -1) {
//			$location.path('/buffet/menu/gainesvillehomecooking');
			webId.loadWebData("gainesvillehomecooking");
		}
		
		$rootScope.admin = {
    		web : webId.web,
    		appService : appService
        };
	});
	
	module.directive("scrollbind", function ($document) {
    	return function($scope, element, attr) {
            angular.element(element).bind("scroll", function() {
            	var isScrollTop = this.scrollTop == 0;
            	
            	if (isScrollTop != $scope.isScrollTop) {
            		$scope.isScrollTop = isScrollTop;
            		$scope.$apply();
            	}
            });
    	};
    });
	
//	module.directive('resize', function ($window) {
//	    return function ($scope, element) {
//	        var w = angular.element($window);
////	        $scope.getWindowDimensions = function () {
////	            return {
////	                'h': w.height(),
////	                'w': w.width()
////	            };
////	        };
////	        $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
////	        	$scope.windowHeight = newValue.h;
////	        	$scope.windowWidth = newValue.w;
////
////	        	$scope.style = function () {
////	                return {
////	                    'height': (newValue.h - 100) + 'px',
////	                    'width': (newValue.w - 100) + 'px'
////	                };
////	            };
////
////	        }, true);
//
//	        w.bind('resize', function () {
//	        	$scope.$apply();
//	        });
//	    };
//	});
	
	module.directive('onSizeChanged', function ($window) {
	    return {
	        restrict: 'A',
	        scope: {
	            onSizeChanged: '&'
	        },
	        link: function (scope, $element, attr) {
	            var element = $element[0];
	            scope.cachedElementWidth = 0;
	            scope.cachedElementHeight = 0;
	            cacheElementSize(scope, element);
	            $window.addEventListener('resize', onWindowResize);
	 
	            function cacheElementSize(scope, element) {
	            	scope.cachedElementWidth = element.offsetWidth;
	            	scope.cachedElementHeight = element.offsetHeight;
	            }
	 
	            function onWindowResize() {
	                var isSizeChanged = scope.cachedElementWidth != element.offsetWidth || scope.cachedElementHeight != element.offsetHeight;
	                
	                if (isSizeChanged) {
	                	cacheElementSize(scope, element);
	                    var expression = scope.onSizeChanged();
	                    expression();
	                }
	            };
	        }
	    };
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, appService) {
		$scope.appService = {
			whichDevice : appService.whichDevice
		};
	});

})();
