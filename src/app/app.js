angular.module( 'app', [
	'templates',
	'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/welcome");
	
	$stateProvider
		.state('welcome', {
			url: "/welcome",
			templateUrl: "templates/welcome.tpl.html"
		})
		.state('about', {
			url: "/about",
			templateUrl: "templates/about.tpl.html"
		});
	
})

.controller( 'AppCtrl', function AppCtrl ( $scope ) {

	$scope.pageTitle = "sl-ng-boilerplate";

})

;
