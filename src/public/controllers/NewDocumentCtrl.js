angular.module('PMApp').controller('NewDocumentCtrl', function ($scope, $stateParams, fb, $firebaseArray, $state) {
  $scope.id = $stateParams.id
  $scope.getDocType = (docType) => {
    const ref = new Firebase(fb.url + '/projects/' + $scope.id + '/documents/' + docType)
    $scope.docs = $firebaseArray(ref)
  }
  $scope.addDoc = function (doc, docType) {
    if (doc === undefined) {
      alert('Please enter a title.')
    } else {
      $scope.docs.$add({
        title: doc.title,
        document_type: docType
      }).then((res) => {
        doc.title = ''
        alert('New Document Added!')
      })
    }
  }
})
