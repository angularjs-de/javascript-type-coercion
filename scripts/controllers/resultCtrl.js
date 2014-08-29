'use strict';

angular.module('typeCoercion')
  .controller('summaryCtrl', function ($scope, $location, resultHolderService) {
    $scope.questions = resultHolderService.getQuestions();
    $scope.results = resultHolderService.getResults();

    if (!$scope.results.length) {
      $location.path('/');
    }
  });