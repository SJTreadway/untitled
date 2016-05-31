angular.module('PMApp').controller('ProjectCtrl', function ($scope, $stateParams, fb, $firebaseArray, $state, docs) {
  $scope.id = $stateParams.id
  $scope.old = true
  $scope.docs = docs
})
