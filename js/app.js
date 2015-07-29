(function () {
    'use strict';

    angular.module('testApp', [])
            .run(function () {
                console.log('run');
            })
            .config(function () {
                console.log('config');
            });

})();