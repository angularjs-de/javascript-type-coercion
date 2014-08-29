angular.module("typeCoercion")
    .controller("taskCtrl", function ($scope, $routeParams, $location, $timeout, DataHolderService) {
        'use strict';
        var tasks = DataHolderService.getTasks();
        $scope.taskId = parseInt($routeParams.taskId, 10);
        $scope.task = tasks[$scope.taskId - 1];
        $scope.sumTasks = tasks.length;
        ga('send', 'pageview-task-'+$scope.taskId);

        $scope.saveResult = function (result) {
            var results = DataHolderService.getResults();
            results[$scope.taskId - 1] = result;
            if ($scope.taskId < $scope.sumTasks) {
                $location.path("/" + ($scope.taskId + 1));
            } else {
                $location.path("/summary");
            }
            console.log(results);

        };

        $timeout(prettyPrint, 1);

    });