myServiceApp.controller('optionsController',['$scope', '$location', 'optionsService' , function ($scope, $location, optionsService) {
		
	$scope.init = function () {
		$scope.option1 = {
			"id" : "1",
			"name" : "Chocolate",
			"color" : "Brown",
			"description" : "Chocolate is brown in color. Kids love it"
		};

		$scope.option2 = {
			"id" : "2",
			"name" : "Strawberry", 
			"color" : "Dark Red",
			"description" : "Strawberry is red in color. Strawberry ice cream is popular among kids"
		};
	};

	$scope.showDescription = function () {
		optionsService.setOption($scope.option);
		$location.path("/description");
	};

	$scope.init();		
}]);
