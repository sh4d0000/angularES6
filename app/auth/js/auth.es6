let auth = angular.module('Bellatrix.auth', [])

auth.config(['$locationProvider', '$routeProvider',
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



auth.controller('MainController', $scope => {

});

export default auth


