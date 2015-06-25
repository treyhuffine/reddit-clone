'use strict';

angular.module('reddit', ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ListCtrl",
      templateUrl: "list.html"
    })
    .otherwise({
      redirectTo: "/"
    });
})
.controller('ListCtrl', function($scope, $http){
  $scope.links = [
    { title: 'Google', url: "http://google.com", description: "Google magic" },
    { title: 'Yahoo', url: "http://yahoo.com", description: "Yahooooo" }
  ];
  $scope.fillForm = function() {
        $scope.links.unshift($scope.link);
        $scope.link = {};
  };
});
