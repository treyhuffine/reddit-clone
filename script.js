'use strict';

angular.module('reddit', ["ngRoute"])
.controller('MainCtrl', function($scope, $http){
  $scope.links = [
    { title: 'Google', url: "http://google.com", description: "Google magic" },
    { title: 'Yahoo', url: "http://yahoo.com", description: "Yahooooo" }
  ];
  $scope.fillForm = function() {
        $scope.links.unshift($scope.link);
        $scope.link = {};
  };
});
