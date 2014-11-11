/*jshint esnext: true */
/*global angular: false */

import security from 'auth/js/security'
import Registration from 'auth/js/subscription';
import User from 'auth/js/user';

let auth = angular.module('Bellatrix.auth', ['ngRoute']);

auth.controller('AuthController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) => {
    console.log('auth called');

    $scope.subscribe = () => {
        console.log('subscribe controller');
        security.subscribeToBeta({email: $scope.email}).then(registration => {
            $scope.addNotification({text: 'Successfully registered!', type: 'success'})
            $location.path('/');

            $scope.$apply();
        });
    };

    $scope.activate = () => {
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

    $scope.login = () => {
        console.log('login controller')

        security.login({ user: new User({alias: $scope.alias, password: $scope.password}) }).then((result) => {
            console.log('logged in as '+security.user.alias);
            $location.path('/');

            $scope.$apply();
        });
    }

}]);


export default auth