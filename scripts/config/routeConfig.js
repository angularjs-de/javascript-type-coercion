angular.module("typeCoercion")
    .config(function ($routeProvider) {
        "use strict";
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html"
            })
            .when("/summary", {
                templateUrl: "views/summary.html",
                controller: "summaryCtrl"
            })
            .when("/:taskId", {
                templateUrl: "views/task.html",
                controller: "taskCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    });