notReddit.controller('EditLinkCtrl', function($scope, $location, linkService, $routeParams) {
  $scope.editLink = linkService.readLink($routeParams.id);
  $scope.saveLinkAndRedirect = function() {
    linkService.saveLink($scope.editLink, $routeParams.id);
    $location.path("/");
  };
});
