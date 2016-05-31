angular.module('PMApp').service('MainService', function(fb, $firebaseArray) {

  this.getProjects = () => {
    let projectsRef = new Firebase(fb.url + '/projects')
    let projects = $firebaseArray(projectsRef)
    return projects
  }

  this.getDocs = () => {
    let docsRef = new Firebase(fb.url + '/projects/' + project.id + '/documents')
    let docs = $firebaseArray(docsRef)
    return docs
  }

})
