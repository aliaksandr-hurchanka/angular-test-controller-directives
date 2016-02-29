var testApp = angular.module('app', ['ui.router']);
var testAppCtrl = require('./app-ctrl');


testApp
    .config(cfgApp)
    .controller('testAppCtrl', testAppCtrl)
    .run();

require('./app-dir')(testApp);


angular.bootstrap(document, [testApp.name]);

function cfgApp($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'testAppCtrl'
        });
}
