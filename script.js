'use strict';

var notReddit = angular.module('reddit', ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ListCtrl",
      templateUrl: "list.html"
    })
    .when("/new", {
      controller: "NewLinkCtrl",
      templateUrl: "new.html"
    })
    .when("/details/:id", {
      controller: "LinkDetailsCtrl",
      templateUrl: "details.html"
    })
    .when("/edit/:id", {
      controller: "EditLinkCtrl",
      templateUrl: "edit.html"
    })
    .otherwise({
      redirectTo: "/"
    });
})
.service('linkService', function() {
  this.links = [
    { title: 'Google', url: "http://google.com", description: "Google magic" },
    { title: 'Yahoo', url: "http://yahoo.com", description: "Yahooooo" }
  ];
  this.storeLink = function(newLink) {
    this.links.unshift(newLink);
  };
  this.removeLink = function(linkIndex) {
    this.links.splice(linkIndex,1);
  };
  this.readLink = function(index) {
    return this.links[index];
  };
  this.saveLink = function(editLink, linkIndex) {
    this.links.splice(linkIndex, 1, editLink);
  }
 })
.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;
  $scope.removeLink = linkService.removeLink;
})
.controller('LinkDetailsCtrl', function($scope, linkService, $routeParams){
  $scope.oneLink = linkService.readLink($routeParams.id)
});
