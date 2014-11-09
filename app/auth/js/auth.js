/*jshint esnext: true */
/*global angular: false */

import security from 'auth/js/security'
import Registration from 'auth/js/subscription';
import User from 'auth/js/user';

let auth = angular.module('Bellatrix.auth', ['ngRoute']);

auth.controller('AuthController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) => {
    console.log('auth called');

    $scope.subscribe = function () {
        console.log('subscribe controller');
        security.subscribeToBeta({email: $scope.email}).then(registration => {
            $scope.addNotification({text: 'Successfully registered!', type: 'success'})
            $location.path('/');

            $scope.$apply();
        });
    };

    $scope.activate = function() {
        console.log('activate controller')
        security.activate({
            registration: new Registration({
                id: $routeParams.registrationId,
                activationCode: $location.search().activationCode,
                user: new User({
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    alias: $scope.alias,
                    password: $scope.password
                })
            })
        }).then(registration => {
            $scope.addNotification({text: 'Successfully activated!', type: 'success'})
            $location.path('/login');

            $scope.$apply();
        });
    }

    $scope.login = function() {
        
    }

}]);


export default auth