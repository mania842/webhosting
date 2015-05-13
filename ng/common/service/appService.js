/**
 * App Overall Service
 */
(function ()
{
    'use strict';
    
    angular.module('myApp').service('appService', 
	function ($rootScope)
	{
    	var service = this;
    	var isDevice = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (isDevice.Android() || isDevice.BlackBerry() || isDevice.iOS() || isDevice.Opera() || isDevice.Windows());
            },
            whichDevice: function() {
            	return isDevice.iOS() ? "iOS" : "any";
            }
        };
    	service.isDevice = isDevice.any();
    	service.whichDevice = isDevice.whichDevice();
    	service.isLandscape = function() {
    		return window.innerWidth > window.innerHeight;
    	};
    	
//    	service.isLoading = false;
//    	var opts1 = {
//    		lines: 10, // The number of lines to draw
//    		length: 15, // The length of each line
//    		width: 7, // The line thickness
//			radius: 15, // The radius of the inner circle
//			corners: 1, // Corner roundness (0..1)
//			rotate: 0, // The rotation offset
//			direction: 1, // 1: clockwise, -1: counterclockwise
//			speed: 1, // Rounds per second
//			trail: 60, // Afterglow percentage
//			shadow: false, // Whether to render a shadow
//			hwaccel: false, // Whether to use hardware acceleration
//			className: 'spinner', // The CSS class to assign to the spinner
//			zIndex: 2e9, // The z-index (defaults to 2000000000)
//			top: '50%', // Top position relative to parent
//			left: '50%' // Left position relative to parent
//    	};
//    	service.startSpinner = function() {
//    		$.fn.spin = function(opts) {
//    			this.each(function() {
//    				var $this = $(this),
//    				data = $this.data();
//    		 
//    				if (data.spinner) {
//    					data.spinner.stop();
//    					delete data.spinner;
//    				}
//    				if (opts !== false) {
//    					data.spinner = new Spinner($.extend({color: $this.css('color')}, opts1)).spin(this);
//    				}
//    			});
//    			return this;
//    		};
//    		service.isLoading = true;
//    		$('#spinner').spin();
//    	};
//    	
//    	service.stopSpinner = function() {
//    		service.isLoading = false;
//    		$('#spinner').spin(false);
//    	};
//    	
//    	service.serverErrorHandle = function(message) {
//    		service.stopSpinner();
//    		service.errorNotification(message);
//    	};
//    	
//    	
//    	service.successNotification = function(msg) {
//    		$rootScope.$broadcast('success', msg);
//    	};
//    	service.errorNotification = function(msg) {
//    		$rootScope.$broadcast('error', msg);
//    	};
//    	service.clearNotification = function() {
//    		$rootScope.$broadcast('clearNotification');
//    	};
//
//    	/**
//    	 * Set the title to display
//    	 */
//    	service.setMenubarTitle = function(title)
//    	{
//    		service.title = title;
//    	};

	    //-----------------------------------------------------------------------
	});
})();