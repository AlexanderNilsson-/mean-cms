'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sampleApp.services', [])

.service("mongoService", ['$location', '$resource','$http', '$rootScope', function($location, $resource, $http, $rootScope) {
	console.log("Factor me");
	var resource = $resource("/api/contacts/:id", { id: "@_id" },
	    {
	      'create':  { method: 'POST' },
	      'index':   { method: 'GET', isArray: true },
	      'show':    { method: 'GET', isArray: false },
	      'update':  { method: 'PUT' },
	      'destroy': { method: 'DELETE' }
	    }
	);

	return resource;
}]);