var testApp = angular.module('app', ['ui.router']);
var testAppCtrl = require('./app-ctrl');

testApp
    .config(cfgApp)
    .controller('testAppCtrl', testAppCtrl)

function cfgApp($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'testAppCtrl'
        });
}
