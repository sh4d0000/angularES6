/*jshint esnext: true */
/*global angular: false */

import security from 'auth/js/security'
import Registration from 'auth/js/subscription';
import User from 'auth/js/user';
import Survey from 'auth/js/survey';

let auth = angular.module('Bellatrix.auth', ['ngRoute', 'ngAutocomplete']);

auth.controller('AuthController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) => {
    console.log('auth called');

    $scope.initialize = () => {
        $scope.citySearchOptions = {
            types: '(cities)'
        };

        $scope.answers = []
        $scope.getSurvey();

    }

    $scope.findCities = () => {
        var request = {
            input: 'ber',
            types: ['cities']
        };

        let service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions(request, (prediction, status) => {
            console.log(JSON.stringify(status)+ ' - ' +JSON.stringify(prediction) );
        });
    }

    $scope.getSurvey = () => {
        Survey.get('registration').then(survey => {
            $scope.survey = survey

            $scope.$apply();
        });
    };

    $scope.subscribe = () => {
        console.log('subscribe controller ' +JSON.stringify($scope.answers));
        security.subscribeToBeta({email: $scope.email, survey: $scope.survey}).then(registration => {
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

    $scope.initialize();

}]);

export default auth