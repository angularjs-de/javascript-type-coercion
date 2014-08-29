'use strict';

angular.module('typeCoercion')
  .config(function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'summaryCtrl'
      })
      .when('/:questionId', {
        templateUrl: 'views/question.html',
        controller: 'questionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });