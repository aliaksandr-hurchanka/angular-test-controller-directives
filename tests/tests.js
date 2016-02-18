"use strict";

var scope, ctrl;

var testAppCtrl = require('../app/app-ctrl');

describe('Controller', function () {

    describe('testAppCtrl', function () {
        var scope,
            controller;

        beforeEach(function () {
            angular.module('app');
        });

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller(testAppCtrl, {
                '$scope': scope
            });
        }));

        it('Get hello', function () {
            expect(scope.hello).toEqual(55);
        });
        
        it('Function test ... ', function () {
            scope.password = 'longerthaneightchars';
            scope.grade();
            expect(scope.strength).toEqual('strong');
            //expect(scope.strength).toEqual('medium');
        });
    });

});
