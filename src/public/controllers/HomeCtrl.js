angular.module('PMApp').controller('HomeCtrl', function($scope, fb, $firebaseArray, projects) {

  $scope.projects = projects;

})
