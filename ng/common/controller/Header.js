/**
 * CSMD - controller - Landing page - header - menu
 */
(function ()
{
    'use strict';

    angular.module('myApp').controller('webHeaderController',
    function ($scope, $window, webId, $location) {
    	$scope.hs = webId.getWeb();
    	$scope.webId = webId;
    	
    	$scope.logo = $scope.hs.DOMAIN ? "json/" + $scope.hs.DOMAIN + "/title.png" : undefined;
    	$scope.$on('service.webId:updated', function(event, data, domain) {
    		$scope.hs = data;
    		$scope.webId = webId;
    		$scope.logo = "json/" + $scope.hs.DOMAIN + "/title.png";
       	});
    	
    	$scope.redirectToHome = function() {
    		$location.path($scope.hs.HOME + $scope.hs.DOMAIN);
    	};
    	
    	// Load scope
//    	$scope.vars = { newID: ""};
//    	$scope.hs = csmdHeaderService;
//    	
//    	console.log("csmdUser", csmdUser);
//    	csmdHeaderService.setMobile( window.innerWidth <= 415 || window.innerHeight <= 415);
//    	
//    	var checkMobile = function() {
//    	    var w = window.innerWidth;
//    	    var h = window.innerHeight;
//    	    var wasMobile = csmdHeaderService.isMobile;
//    	    var isMobile = w <= 415 || h <= 415;
//    	    if (wasMobile != isMobile) {
//        	    csmdHeaderService.setMobile(isMobile);
//    	    }
//    	};
//    	
//    	if ($window.addEventListener)
//    		$window.addEventListener("resize", checkMobile);
//    	
//    	$scope.getHeaderStyle = function() {
//    		if ($scope.hs.isMobile && $scope.hs.message) {
//    			return {'display': 'block'};
//    		} else {
//    			return {'display': 'table-cell'};
//    		}
//    	};
//    	
//    	var em = function (input) {
//		    var emSize = parseFloat($("body").css("font-size"));
//		    return (emSize * input);
//		};
//		
//    	$scope.getTop = function() {
//    		return {'top': (window.innerHeight / 2) - em(5)};
//    	};
//    	
//    	var overrideDialog = null;
//    	// Show dialog to change the effective ATTUID
//    	$scope.overrideUser = function() {
//    		csmdUser.getUser().then(function(user) {
//    			if (user.hasRealRole('ADMIN')) {
//    				overrideDialog = new BonesDialog2($scope, 'ng/dashboard/html/attuid_override.html');
//    			}
//    		});
//    	};
//    	
//    	$scope.setEffectiveID = function(id)
//    	{
//    		if (id == '') {
//    			$scope.vars.newID = "";
//    			console.log("asdf");
//    		}
//    		BonesWebRest.getData('dashboard/SetOverride', { ATTUID: id})
//    		.then(function()
//			{
//    			// Hide dialog
//        		overrideDialog.close();
//        		
//        		// Refresh the user in the data model
//        		csmdUser.refresh();
//			},
//			function(error) {
//				overrideDialog.close();
//				csmdHeaderService.serverErrorHandle(error);
//			});
//    	};
	});
})();
