'use strict';

angular.module('typeCoercion')
  .controller('summaryCtrl', function ($scope, $location, DataHolderService) {
    $scope.tasks = DataHolderService.getTasks();
    $scope.results = DataHolderService.getResults();

    if (!$scope.results.length) {
      $location.path('/');
    }
  });