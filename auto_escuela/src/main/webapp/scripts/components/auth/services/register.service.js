'use strict';

angular.module('autoEscuelaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


