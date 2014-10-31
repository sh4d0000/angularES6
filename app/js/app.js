/*jshint esnext: true */
/*global angular: false */
import auth from 'auth/js/auth'

let bellatrix = angular.module('Bellatrix', ['ngRoute', 'Bellatrix.auth'])

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
                .when("/subscription", {
                    templateUrl: "./auth/subscription.html",
                    controller: "AuthController"
                })
        }
    ]);



bellatrix.controller('MainController', $scope => {
    console.log('main called')

});

export default bellatrix