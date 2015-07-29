(function () {
    'use strict';

    angular
            .module('testApp')
            .controller('NewsController', ['$scope', 'queries', function ($scope, queries) {
                    $scope.isLoading = true;
                    $scope.isError = false;
                    
                    queries
                            .getNews()
                            .then(function (data) {
                                $scope.news = data;
                            })
                            .catch(function () {
                                $scope.isError = true;
                            })
                            .finally(function () {
                                $scope.isLoading = false;
                            });
                }]);
})();