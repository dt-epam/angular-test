(function () {
    'use strict';

    var app = angular.module('testApp', []);

    app.controller('HomePageController', ['$scope', function ($scope) {
        $scope.title = 'Home page';
        $scope.field1 = '';
    }]);

})();