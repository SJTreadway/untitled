angular.module('PMApp').controller('NewDocumentCtrl', function ($scope, $stateParams, fb, $firebaseArray, $state) {
  $scope.id = $stateParams.id
  $scope.old = false
  const ref = new Firebase(fb.url + '/projects/' + $scope.id + '/documents')
  $scope.docs = $firebaseArray(ref)
  $scope.addDoc = function (doc, docType) {
    console.log('clicked!', doc)
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
