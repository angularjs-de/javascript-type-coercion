'use strict';

angular.module('typeCoercion')
  .controller('summaryCtrl', function ($scope, $location, resultHolderService) {
    $scope.questions = resultHolderService.getQuestions();
    $scope.results = resultHolderService.getResults();
    $scope.correctAnswersCount = resultHolderService.getCorrectAnswersCount();

    if (!$scope.results.length) {
      $location.path('/');
    }
  });