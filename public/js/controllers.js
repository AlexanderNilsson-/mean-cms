'use strict';


/* Controllers */

angular.module('sampleApp.controllers', [
		"sampleApp.factory"
	])
	.controller('HomeController', function($scope) {
		
		$scope.showPosts = function() {
			mongoService.index();
		}
	
	})
	

	.controller('MainController', function($scope) {

		$scope.tagline = 'To the moon and back!';

	})
	

	.controller('AdminController', ['$scope','mongoService', '$location', '$routeParams', function($scope, mongoService, $routeParams, $location) {

		$scope.contact = { firstname: 'string', lastname: 'string', age: 'number' };

		$scope.insertNewMessage = function(message) {
			mongoService.create(message);
		}

		$scope.updateMessage = function(message) {
			mongoService.update(message);
		}

		//mongoService.create($scope.contact, success, failure);
		$scope.tagline = 'Nothing beats a pocket protector!';
		$scope.findContact = mongoService.index();
	}]);