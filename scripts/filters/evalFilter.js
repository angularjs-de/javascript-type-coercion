angular.module("typeCoercion")
    .filter('eval', function () {
        return function (input) {
            if (/^if/.test(input)) {
                input = input.replace('if(', '').replace(')', '');
                input = 'new Boolean(' + input + ')';
            }
            return eval(input).toString();
        };
    });