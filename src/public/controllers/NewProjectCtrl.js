angular.module('PMApp').controller('NewProjectCtrl', function ($scope, fb, $firebaseArray, $state) {
  const ref = new Firebase(fb.url + '/projects')
  $scope.projects = $firebaseArray(ref)
  $scope.addProject = function (project) {
    if (project === undefined) {
      alert('Please enter a title.')
    } else {
      $scope.projects.$add({
        title: project.title
      }).then((res) => {
        $state.go('home')
      })
    }
  }
})
