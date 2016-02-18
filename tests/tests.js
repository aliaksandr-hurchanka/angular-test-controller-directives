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

    describe('Test directive', function () {
        var $compile,
            $rootScope;

        // Load the myApp module, which contains the directive
        beforeEach(angular.module('app'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        //        it('Replaces the element with the appropriate content', function () {
        //            // Compile a piece of HTML containing the directive
        //            var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
        //            // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        //            $rootScope.$digest();
        //            // Check that the compiled element contains the templated content
        //            expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
        //        });

    });

    describe('length filter', function () {
        
        beforeEach(function () {
            angular.module('app');
        });
        
        var $filter;

        beforeEach(inject(function (_$filter_) {
            $filter = _$filter_;
        }));

        it('returns 0 when given null', function () {
            var length = $filter('length');
            expect(length(null)).toEqual(0);
        });

        it('returns the correct value when given a string of chars', function () {
            var length = $filter('length');
            expect(length('abc')).toEqual(3);
        });
    });

});
