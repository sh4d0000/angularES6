"use strict";
angular.module('Bellatrix', ['ngRoute', 'ngAnimate']).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when("/", {
    templateUrl: "./partials/partial1.html",
    controller: "MainController"
  }).otherwise({redirectTo: '/'});
}]);
angular.module('Bellatrix').controller('MainController', ['$scope', function($scope) {
  $scope.test = "ciaaaaaoa!";
}]);
