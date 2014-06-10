angular.module('NerdCtrl', ['sampleApp.services']).controller('NerdController', ['$scope', 'mongoService',function($scope, mongoService) {

	$scope.tagline = 'Nothing beats a pocket protector!';

});