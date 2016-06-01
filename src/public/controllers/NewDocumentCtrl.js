angular.module('PMApp').controller('NewDocumentCtrl', function ($scope, $stateParams, fb, $firebaseArray, $state) {
  $scope.id = $stateParams.id
  $scope.getDocType = (docType) => {
    const ref = new Firebase(fb.url + '/projects/' + $scope.id + '/documents/' + docType)
    $scope.docs = $firebaseArray(ref)
  }
  $scope.addDoc = (doc) => {
    if (doc === undefined) {
      alert('Please enter a title.')
    } else {
      $scope.docs.$add({
        title: doc.title
      }).then((res) => {
        doc.title = ''
        alert('New Document Added!')
      })
    }
  }
})
