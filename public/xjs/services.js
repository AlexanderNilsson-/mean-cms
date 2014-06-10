'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sampleApp.services', [])

.service("mongoService", ['$location', '$http', '$rootScope', function($location, $http, $rootScope) {
   var mongoServant = {};
   	mongoServant.getUser = function(userId) {
   		return ("hello user " + userId);
   	}
   
   return mongoServant;
}]);