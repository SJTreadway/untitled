angular.module('PMApp').controller('DocumentsCtrl', function ($scope, $stateParams) {
  $scope.id = $stateParams.id
  console.log("state params:", $stateParams)
  $scope.docs = ['Purchase Orders', 'Material Invoices', 'Contracts', 'Billing', 'Product Submittals', 'Cost Reports']
})
