/*jshint esnext: true */
/*global angular: false */

import Security from 'auth/js/security'
import Subscription from 'auth/js/subscription'

let auth = angular.module('Bellatrix.auth', ['ngRoute']);

auth.controller('AuthController', $scope => {
    console.log('auth called');

    $scope.subscribe = function () {
        console.log('subscribe controller');
        new Security('sd').subscribeToBeta({email: $scope.email});
    }

});


export default auth