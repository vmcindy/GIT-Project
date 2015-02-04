var customerControllers = angular.module('customerControllers', []);

customerControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/customers.json').success(function(data) {
    $scope.customers = data;
    $scope.customerOrder = 'name';
  });
}]);

customerControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/customers.json').success(function(data) {
    $scope.customers = data;
    $scope.whichPerson = $routeParams.personId;

    if($routeParams.personId > 0) {
    	$scope.prevPerson = Number($routeParams.personId) - 1;
    } else {
    	$scope.prevPerson = $scope.customers.length - 1;
    }
    if($routeParams.personId < $scope.customers.length - 1) {
    	$scope.nextPerson = Number($routeParams.personId) + 1;
    } else {
    	$scope.nextPerson = 0;
    }
  });
}]);

customerControllers.controller('NewformController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/customers.json').success(function(data) {
    $scope.customers = data;
    $scope.customerOrder = 'name';
  });
}]);

