angular.module('PMApp').service('MainService', function(fb, $firebaseArray) {

  this.getProjects = function() {
    let projectsRef = new Firebase(fb.url + '/projects');
    let projects = $firebaseArray(projectsRef);
    return projects;
  };

})
