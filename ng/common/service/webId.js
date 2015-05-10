/**
 * Buffet - web data model
 */
(function ()
{
    'use strict';
    
    angular.module('myApp').service('webId', 
	function ($http, $rootScope, page) {
    	var service = this;
    	
    	// The cached data model object
    	service.web = { };
	    
	    //-----------------------------------------------------------------------

    	/**
    	 * Get and cache current web
    	 */
    	service.loadWebData = function(homepage) {
    		console.log("loadwebdata", homepage);
    		if (service.getDataPromise && service.homepage === homepage) {
    			// Kick off a digest since we're bypassing the $http call
//    			$http.$digest();
    			return service.web;
			} else {
    			service.getDataPromise = $http.get('json/' + homepage + "/homedata.json").success(function(data) {
//    				service.web = data;
    				
   	    		   	page.setTitle(data.TITLE);
   	    		   	
   	    		   	// Copy properties from web service
    				angular.extend(service.web, data);
    				service.homepage = homepage;
    				var res = data.PHONE.split(" ");
    				service.web.PHONE = "(" + res[0] + ") " + res[1] + "-" + res[2];
    				
    				service.web.CALL = "tel:" + res[0] + "-" + res[1] + "-" + res[2];
   	    		   	$rootScope.$broadcast('service.webId:updated', service.getWeb());
   	    		   	return service.web;
    	    	});
			}
    		
    		return service.getDataPromise;
    	};

//    	/**
//    	 * Load user info when service is created
//    	 */
//    	service.loadWebData();
    	
	    //-----------------------------------------------------------------------
    	
    	/**
    	 * Get web
    	 */
    	service.getWeb = function() {
    		return service.web;
    	};
    	
    	service.getWebFooter = function() {
    		return service.web ? service.web.FOOTER : {};
    	};
    	
    	service.getWebDomain = function() {
    		return service.web ? service.web.DOMAIN : {};
    	};
    	
    	service.web.getAddress = function() {
    		var str = "";
    		if (service.web.ADDRESS) {
    			str += service.web.ADDRESS.STREET_1.trim();
    			if (service.web.ADDRESS.STREET_2 && service.web.ADDRESS.STREET_2.length > 0)
    				str += " " + service.web.ADDRESS.STREET_2.trim();
    			str += ", " + service.web.ADDRESS.CITY.trim();
    			str += ", " + service.web.ADDRESS.STATE.trim();
    			str += " " + service.web.ADDRESS.ZIPCODE.trim();
    		}
    		return str;
    	};
    	
	    //-----------------------------------------------------------------------
	});
})();
