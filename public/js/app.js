'use strict';

/* Controllers */
//myApp is the name found in <html ng-app="myApp">
//aService is just a dummy name for our Service function template

angular.module('sampleApp', [
	'ngRoute',
	'ngResource',
	'sampleApp.controllers', 
	'sampleApp.services'
])

.config(['$locationProvider', function($locationProvider) {
 $locationProvider.html5Mode(true);
}])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$routeProvider.otherwise({redirectTo: '/'});

}]);