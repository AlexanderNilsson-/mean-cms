'use strict';


/* Controllers */

angular.module('sampleApp.controllers', [
		"sampleApp.services"
	])
	.controller('GeekController', function($scope) {
		$scope.tagline = 'The square root of life is pi!';	

	})
	.controller('MainController', function($scope) {

		$scope.tagline = 'To the moon and back!';	

	})
	.controller('NerdController', ['$scope','mongoService', function($scope, mongoService) {

		$scope.tagline = 'Nothing beats a pocket protector!';
		$scope.generateStuff = mongoService.generateStuff();
		console.log($scope.generateStuff);

	}]);