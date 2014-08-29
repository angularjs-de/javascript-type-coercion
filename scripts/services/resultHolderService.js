angular.module('typeCoercion')
  .factory('resultHolderService', function(questions, $filter) {
    'use strict';
    function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
    var results = [];
    var questions = shuffle(questions);

    function getCorrectAnswersCount() {
      console.log(results);
      return questions.filter(function(question, index){
        console.log(index, $filter('eval')(question), results[index])
        return $filter('eval')(question) === results[index];
      }).length
    }

    return {
      getQuestions: function() {
        return questions;
      },
      getResults: function() {
        return results;
      },
      getCorrectAnswersCount: getCorrectAnswersCount
    };

  });