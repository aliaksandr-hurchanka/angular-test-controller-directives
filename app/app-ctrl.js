"use strict";

module.exports = function ($scope) {
    $scope.hello = 55;

    $scope.todos = [
        {text:'learn angular'},
        {text:'build an angular app'}
    ];

    $scope.addData = function () {
        $scope.todos.push({text:$scope.todoText});
        $scope.todoText = '';
    }
};
