"use strict";

describe('Controller', function () {
    beforeEach(angular.module('app', [])
        .controller('testAppCtrl', require('../app/app-ctrl'))
    );

    // var $controller;

    // beforeEach(angular.inject(function (_$controller_) {
    //     // The injector unwraps the underscores (_) from around the parameter names when matching
    //     $controller = _$controller_;
    // }));

    // describe('Test controller', function () {
    //     it('hello >>> ', function () {
    //         var $scope = {};
    //         var controller = $controller('testAppCtrl', {
    //             $scope: $scope
    //         });
    //         expect($scope.hello).toEqual(55);
    //     });
    // });
});

// describe('Unit testing great quotes', function () {
//     var $compile,
//         $rootScope;

//     // Load the myApp module, which contains the directive
//     beforeEach(module('app'));

//     // Store references to $rootScope and $compile
//     // so they are available to all tests in this describe block
//     beforeEach(inject(function (_$compile_, _$rootScope_) {
//         // The injector unwraps the underscores (_) from around the parameter names when matching
//         $compile = _$compile_;
//         $rootScope = _$rootScope_;
//     }));

//     it('Replaces the element with the appropriate content', function () {
//         // Compile a piece of HTML containing the directive
//         var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
//         // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
//         $rootScope.$digest();
//         // Check that the compiled element contains the templated content
//         expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
//     });
// });
