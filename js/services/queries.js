(function () {
    'use strict';

    angular
            .module('testApp')
            .factory('queries', ['$http', '$q', function ($http, $q) {
                    var getNews = function () {
                        var deferred = $q.defer();

                        $http
                                .get('data/news.json')
                                .success(function (data) {
                                    setTimeout(function () {
                                        deferred.resolve(data);
                                    }, 2000);
                                })
                                .error(function () {
                                    deferred.reject();
                                });

                        return deferred.promise;
                    };

                    return {
                        getNews: getNews
                    };
                }]);

})();