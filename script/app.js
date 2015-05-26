var myServiceApp = angular.module('myServiceApp', ['ngRoute']);
	
myServiceApp.config(function ($routeProvider){
	$routeProvider
	.when('/options',
	{
		controller: 'optionsController',
		templateUrl: 'options.html'
	})
	.when('/description',
	{
		controller: 'descriptionController',
		templateUrl: 'description.html'
	})
	.otherwise({redirectTo: '/options'});
});
