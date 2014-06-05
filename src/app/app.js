angular.module( 'app', [
		'templates'	
	])

.controller( 'AppCtrl', function AppCtrl ( $scope ) {

	$scope.pageTitle = "sl-ng-boilerplate";
	$scope.greeting = "Hello World!";
	$scope.message = "If you're reading this then angular is working.  Pat yourself on the back!";

})

;
