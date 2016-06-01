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
          projects: MainService => {
            return MainService.getProjects()
          }
        }
      })
      .state('newProject', {
        url: '/newProject',
        templateUrl: './templates/NewProjectTmpl.html',
        controller: 'NewProjectCtrl'
      })
      .state('newDocument', {
        url: '/project/:id/newDocument',
        templateUrl: './templates/NewDocumentTmpl.html',
        controller: 'NewDocumentCtrl'
      })
      .state('documents', {
        url: '/project/:id/documents',
        templateUrl: './templates/DocumentsTmpl.html',
        controller: 'DocumentsCtrl'
      })
      .state('documentType', {
        url: '/project/:id/documents/:type',
        templateUrl: './templates/DocumentTypeTmpl.html',
        controller: 'DocumentTypeCtrl'
      })
      .state('singleDocument', {
        url: '/project/:id/documents/:type/:docID',
        templateUrl: './templates/SingleDocumentTmpl.html',
        controller: 'SingleDocumentCtrl'
      })
  })
