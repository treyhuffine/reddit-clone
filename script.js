'use strict';

angular.module('reddit', ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ListCtrl",
      templateUrl: "list.html"
    })
    .when("/new", {
      controll: "NewLinkCtrl",
      templateUrl: "new.html"
    })
    .otherwise({
      redirectTo: "/"
    });
})
.service('linkService', function(){
  this.links = [
    { title: 'Google', url: "http://google.com", description: "Google magic" },
    { title: 'Yahoo', url: "http://yahoo.com", description: "Yahooooo" }
  ];
 })
.controller('NewLinkCtrl', function($scope) {

 })
.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;
});
