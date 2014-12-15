/*jshint esnext: true */
/*global angular: false */
import Idea from 'ideas/js/idea'
import security from 'auth/js/security'


let ideas = angular.module('Bellatrix.ideas', ['ngRoute']);

ideas.controller('IdeaController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) => {
    $scope.getAll = () => {
        Idea.all().then(ideas => {
            $scope.ideas = ideas;
        });
    };

    $scope.createIdea = () => {
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