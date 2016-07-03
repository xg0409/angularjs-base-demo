window.app = angular.module('Demo', [
	'ui.router'
]);
app.config(["$stateProvider", "$urlRouterProvider", routeConfig])
	.controller("testCtrl", angular.noop);

function routeConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/app/page1");
	$stateProvider
		.state("app", {
			url: "/app",
			templateUrl: "'layout.html'",
			controller: function($scope) {
				$scope.name = "XG";
			}
		})
		.state("app.page1", {
			url: "/page1",
			templateUrl: "'page1.html'"
		})
		.state("app.page2", {
			url: "/page2",
			templateUrl: "'page2.html'",
			controller: function($scope) {
				$scope.name = "XG2";
			}
		});
};