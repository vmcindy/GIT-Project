var myApp = angular.module('myApp', [
  'ngRoute',
  'customerControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
    when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:personId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).  
  when('/newform', {
    templateUrl: 'partials/newform.html',
    controller: 'NewformController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);