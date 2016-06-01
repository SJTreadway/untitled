angular.module('PMApp').controller('DocumentTypeCtrl', function ($scope, $stateParams, fb, $firebaseArray) {
  $scope.id = $stateParams.id
  $scope.type = $stateParams.type
  $scope.getDocs = () => {
    const ref = new Firebase(fb.url + '/projects/' + $scope.id + '/documents/' + $stateParams.type)
    $scope.docs = $firebaseArray(ref)
  }
  $scope.getDocs();
})
