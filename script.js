'use strict';

angular.module('App', ['ui.bootstrap', 'ui.router', 'ui.navbar'])

.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "/home.html"
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "state1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.html"
    });
  })




.controller('NavigationController', function($scope) {

  $scope.tree = [{
    name: "E-mail",
    link: "#",
    
    }, 
{
    name: "Social Media",
    link: "#",
  }];
});