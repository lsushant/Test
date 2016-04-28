function wlCommonInit(){
	require([ "layers/core-web-layer", "layers/mobile-ui-layer" ], dojoInit);

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	

	$("#MainView").load("pages/listofgeography.html", function() {
	});
	
}


function dojoInit() {
	require([ "dojo/ready", "dojo/parser", "dojox/mobile", "dojo/dom", "dijit/registry", "dojox/mobile/ScrollableView" ], function(ready) {
		ready(function() {
		});
	});
}

function gotoPage(url, callback) {
	console.log('starting gotoPage, waiting on dojo require');
	try {
		require(
				[ "dojo/dom", "dojo/when", "dijit/registry", "dojo/dom-style" , "dojox/mobile/ViewController"],
				function(dom, when, registry, domStyle,ViewController) {
					console.log('gotoPage ' + url);
					when(ViewController.getInstance().openExternalView({
						url : url,
						transition : 'slide',
						noTransition : false,
					}, document.body), function() {
						console.log('when transition started');
						if (callback != undefined) {
							try {
								console.log('running callback');
								callback();
							} catch (e) {
								console.log(e);
							}
						}
						console.log('when ending');
					});
				});
		console.log('after dojo require');
	} catch (err) {
		console.log('exception');
		console.log(err);
	}
}