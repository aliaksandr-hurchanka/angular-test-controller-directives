angular.module('app', [])
	.controller('HelloController', function PasswordController($scope) {
		$scope.hello = 55;
	})
	.directive('aGreatEye', function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
		};
	});