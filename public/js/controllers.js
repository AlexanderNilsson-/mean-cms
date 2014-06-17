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
	

	.controller('AdminController', ['$scope','mongoService', function($scope, mongoService) {
		function success(response) {
			console.log("success", response);
		}
		function failure(response) {
			console.log("failure", response);
		}
		$scope.contact = { firstname: 'string', lastname: 'string', age: 'number' };

		$scope.insertNewMessage = function(message) {
			console.log(message);
		}

		console.log($scope.author);
		//mongoService.create($scope.contact, success, failure);
		$scope.tagline = 'Nothing beats a pocket protector!';
		$scope.findContact = mongoService.index();
		console.log("index",$scope.findContact);
	}]);