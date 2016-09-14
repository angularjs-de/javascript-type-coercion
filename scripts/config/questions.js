'use strict';

angular.module('typeCoercion')
  .constant('questions', [
    '1 == 1',     // returns true
    '"1" == 1',   // returns true ("1" converts to 1)
    '1 == true',  // returns true
    '0 == false', // returns true
    '"" == 0',    // returns true ("" converts to 0)
    '"  " == 0',  // returns true ("  " converts to 0)
    '0 == 1',     // returns false
    '1 == false', // returns false
    '0 == true',  // returns false
    '0 != false', // returns false
    '"" != 0',    // returns false ("" converts to 0)
    '"  " != 0',  // returns false ("  " converts to 0)
    '0 != 1',     // returns true
    '1 != false', // returns true
    '0 != true',  // returns true
    '1 === 1',     // returns true
    '"1" === 1',   // returns false ("1" is not converted)
    '1 === true',  // returns false
    '0 === false', // returns false
    '"" === 0',    // returns false ("" is not converted)
    '"  " === 0',  // returns false ("  " is not converted)
    '0 === 1',     // returns false
    '1 === false', // returns false
    '0 !== true',  // returns true
    'var x, y;\nx = {};\ny = x;\nx != y //?', // returns false (refers to same object in memory)
    'var x, y;\nx = {};\ny = x;\nx != {} //?', // returns true (not the same object)
    'var x, y;\nx = {};\ny = x;\nx == y //?', // returns true (refers to same object in memory)
    'var x, y;\nx = {};\ny = x;\nx == {} //?', // returns false (not the same object)
    'var x, y;\nx = {};\ny = x;\nx === y //?', // returns false (not the same object)
    'var x, y;\nx = {};\ny = x;\nx === {} //?',
    'if("")', // false
    'if("5")', // true
    'if(0)', // false
    'if(-1)', // true
    'if(null)', // false
    'if(undefined)', // false'// returns false (not the same object)
    'null == undefined', // returns true
    'null == false', // returns false
    'NaN == NaN' // returns false
  ]);