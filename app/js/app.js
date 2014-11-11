/*jshint esnext: true */
/*global angular: false */
import auth from 'auth/js/auth'
import security from 'auth/js/security'
import ideas from 'ideas/js/ideas'

let bellatrix = angular.module('Bellatrix', ['ngRoute', 'Bellatrix.auth', 'Bellatrix.ideas'])

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
                .when("/activation/:registrationId", {
                    templateUrl: "./auth/activation.html",
                    controller: "AuthController"
                })
                .when("/ideas", {
                    templateUrl: "./ideas/ideas.html"
                })
                .when("/idea", {
                    templateUrl: "./ideas/idea.html"
                })
        }
    ]);



bellatrix.controller('MainController', $scope => {
    $scope.security = security;
    $scope.notifications = []

    $scope.removeNotification = index => {
        delete $scope.notifications[index]
    }

    $scope.addNotification = notification => {
        notification.time = new Date()
        $scope.notifications.push(notification)
    }

});

export default bellatrix