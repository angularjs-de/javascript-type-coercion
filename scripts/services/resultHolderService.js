angular.module('typeCoercion')
  .factory('resultHolderService', function(questions) {
    'use strict';
    function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
    var results = [];
    var tasks = shuffle(questions);

    return {
      getQuestions: function () {
        return tasks;
      },
      getResults: function () {
        return results;
      }
    };

  });