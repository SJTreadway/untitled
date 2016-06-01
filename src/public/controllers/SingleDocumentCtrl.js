angular.module('PMApp').controller('SingleDocumentCtrl', function ($scope, fb, $stateParams, $firebaseArray) {
  $scope.id = $stateParams.id
  $scope.type = $stateParams.type
  $scope.getDoc = () => {
    const ref = new Firebase(fb.url + '/projects/' + $stateParams.id + '/documents/' + $stateParams.type + '/' + $stateParams.docID)
    $scope.docs = $firebaseArray(ref)
  }
  $scope.getDoc();
})
