var testApp = angular.module('app', []);
var testAppCtrl = require('./app-ctrl');
var testAppDir = require('./app-dir')(testApp);

testApp
    .controller('testAppCtrl', testAppCtrl)
    .filter('length', function () {
        return function (text) {
            return ('' + (text || '')).length;
        }
    })
