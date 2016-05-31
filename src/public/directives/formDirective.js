angular.module('PMApp').directive('formDirective', function () {
  return {
    restrict: 'E',
    templateUrl: '../templates/formDirectiveTmpl.html',
    scope: {
      formD: '='
    }
  }
})
