'use strict';

angular.module('typeCoercion')
  .controller('questionCtrl', function ($scope, $routeParams, $location, $timeout, resultHolderService) {
    var questions = resultHolderService.getQuestions();
    $scope.questionId = parseInt($routeParams.questionId, 10);
    $scope.question = questions[$scope.questionId - 1];
    $scope.sumQuestions = questions.length;

    $scope.saveAnswer = function (result) {
      var results = resultHolderService.getResults();
      results[$scope.questionId - 1] = result;
      if ($scope.questionId < $scope.sumQuestions) {
        $location.path('/' + ($scope.questionId + 1));
      } else {
        $location.path('/result');
      }
    };

    $timeout(prettyPrint, 1);
  });