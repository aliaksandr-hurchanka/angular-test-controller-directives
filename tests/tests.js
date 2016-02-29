"use strict";

(function () {
    console.log('gsgfdgfdgfdgdfgfd');
    var scope, ctrl, element, $compile, $rootScope;

    var testAppCtrl = require('../app/app-ctrl');

    describe('Controller', function () {
        describe('testAppCtrl', function () {
            var scope,
                controller;

            beforeEach(function () {
                angular.module('app');
            });

            beforeEach(angular.mock.inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller(testAppCtrl, {
                    '$scope': scope
                });
            }));

            it('Get hello', function () {
                expect(scope.hello).toEqual(55);
            });
        });

        xdescribe('Test directive', function () {
            var $compile;
            var $rootScope;

            beforeEach(angular.module('app'));

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));

            it('Replaces the element with the appropriate content', function () {
                element = $compile("<a-great-eye></a-great-eye>")($rootScope);
                $rootScope.$digest();
                expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
            });

        });

        xdescribe('length filter', function () {

            beforeEach(function () {
                angular.module('app');
            });

            var $filter;

            beforeEach(inject(function (_$filter_) {
                $filter = _$filter_;
            }));

            xit('returns 0 when given null', function () {
                var length = $filter('length');
                expect(length(null)).toEqual(0);
            });

            xit('returns the correct value when given a string of chars', function () {
                var length = $filter('length');
                expect(length('abc')).toEqual(3);
            });
        });

    });
})();
