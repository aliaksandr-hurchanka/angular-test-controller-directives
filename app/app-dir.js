"use strict";

module.exports = function (testApp) {
	console.log('Test app > ', testApp);
    testApp
       .directive('myDrtv', function () {
           return {
               restrict: 'E',
               // Better to externalize to templateUrl, this is for demonstration sake
               template: '<div>Hello {{name}}</div>',
               replace: false
           };
       });
        
        // .directive('aGreatEye', function () {
        //     return {
        //         restrict: 'E',
        //         replace: true,
        //         template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
        //     };
        // });
};
