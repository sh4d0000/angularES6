/*jshint esnext: true */
/*global angular: false */

import security from 'auth/js/security'

let auth = angular.module('Bellatrix.auth', ['ngRoute']);

auth.controller('AuthController', $scope => {
    console.log('auth called');

    $scope.subscribe = function () {
        console.log('subscribe controller');
        security.subscribeToBeta({email: $scope.email});
    }

});


export default auth