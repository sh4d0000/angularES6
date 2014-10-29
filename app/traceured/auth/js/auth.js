let bellatrix = angular.module('Bellatrix', ['ngRoute'])

bellatrix.config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true).hashPrefix('!');

            $routeProvider
                .when("/", {
                    templateUrl: "./home/welcome.html",
                    controller: "MainController"
                })
                .when("/login", {
                    templateUrl: "./auth/login.html",
                    controller: "AuthController"
                })
        }
    ]);



bellatrix.controller('MainController', $scope => {

});

export default bellatrix






/*

 bellatrix

 .config(['$locationProvider', '$routeProvider',
 function($locationProvider, $routeProvider) {
 $locationProvider.hashPrefix('!');
 // routes
 $routeProvider
 .when("/", {
 templateUrl: "./partials/partial1.html",
 controller: "MainController"
 })
 .otherwise({
 redirectTo: '/'
 });
 }
 ]);

 //Load controller
 angular.module('Bellatrix')

 .controller('MainController', [
 '$scope',
 function($scope) {
 $scope.test = "ciaaaaaoa!";
 }
 ]);*/
