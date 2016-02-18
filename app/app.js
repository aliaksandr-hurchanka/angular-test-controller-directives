var testApp = angular.module('app', []);
var testAppCtrl = require('./app-ctrl');

testApp
    .controller('testAppCtrl', testAppCtrl)
    .filter('length', function () {
        return function (text) {
            return ('' + (text || '')).length;
        }
    })

    .directive('aGreatEye', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
        };
    });
