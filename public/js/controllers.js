'use strict';


/* Controllers */

angular.module('sampleApp.controllers', [
		"sampleApp.factory"
	])
	.controller('HomeController',['$scope','mongoService', '$location', '$routeParams', function($scope, mongoService, $routeParams, $location) {
		
		$scope.showPosts = mongoService.index();
		//$scope.showPosts = [mongoService.show()];
		$scope.deletePost = function(postID){
			console.log(postID);
			mongoService.destroy(postID);
		}
	
	}])
	

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