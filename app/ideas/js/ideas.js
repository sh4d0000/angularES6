/*jshint esnext: true */
/*global angular: false */
import Idea from 'ideas/js/idea'
import security from 'auth/js/security'


let ideas = angular.module('Bellatrix.ideas', ['ngRoute']);

ideas.controller('IdeaController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) => {
    console.log('ideas called');

    $scope.getAll = () => {
        Idea.all().then(ideas => {
            console.log('getall called')
            $scope.ideas = ideas;
        });
    };

    $scope.createIdea = () => {
        console.log('createidea called');
        $scope.idea = new Idea({user: security.user});
        $location.path('/idea');
    }

    $scope.save = () => {
        $scope.idea.save().then(idea => {
            $scope.addNotification({text: 'Idea successfully created!', type: 'success'});
            $location.path('/ideas')
        });
    }




}]);


export default ideas