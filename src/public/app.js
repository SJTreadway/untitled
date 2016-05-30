angular.module('PMApp', ['ui.router', 'firebase'])
  .constant('fb', {
    url: 'https://sjt-pm.firebaseio.com'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './templates/HomeTmpl.html',
        controller: 'HomeCtrl',
        resolve: {
          projects: function (MainService) {
            return MainService.getProjects()
          }
        }
      })
      .state('newProject', {
        url: '/newProject',
        templateUrl: './templates/NewProjectTmpl.html',
        controller: 'NewProjectCtrl'
      })
      .state('project', {
        url: '/project/:id',
        templateUrl: './templates/ProjectTmpl.html',
        controller: 'ProjectCtrl'
      })
      .state('newDocument', {
        url: '/project/:id/newDocument',
        templateUrl: './templates/NewDocumentTmpl.html',
        controller: 'NewDocumentCtrl'
      })
  })
