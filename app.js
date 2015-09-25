var SignIn = angular.module('SignIn', ['ui.router']);

SignIn.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'',
    templateUrl:'partials/home.html'
  });



});
