 'use strict';

angular.module('autoEscuelaApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-autoEscuelaApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-autoEscuelaApp-params')});
                }
                return response;
            }
        };
    });
