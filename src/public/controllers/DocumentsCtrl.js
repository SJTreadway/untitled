angular.module('PMApp').controller('DocumentsCtrl', function ($scope, $stateParams) {
  $scope.id = $stateParams.id
  $scope.docs = ['Purchase Orders', 'Material Invoices', 'Contracts', 'Billing', 'Product Submittals', 'Cost Reports']
})
