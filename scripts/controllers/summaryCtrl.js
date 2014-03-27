angular.module("typeCoercion")
    .controller("summaryCtrl", function ($scope, $location, DataHolderService) {
        'use strict';
        $scope.tasks = DataHolderService.getTasks();
        $scope.results = DataHolderService.getResults();
        ga('send', 'pageview-result');


    if (!$scope.results.length) {
            $location.path("/");
        }
    });