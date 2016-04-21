/**
 * Created by david on 11/04/16.
 */

angular.module('ligaBasket01App')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('AngularJS_1701', {
                url: '/AngularJS_1701',
                data : {
                    pageTitle:'AngularJS_1701'
                },
                views: {
                    'content@': {
                        templateUrl: 'AngularJS_1701.html',
                        controller: 'modificacionCtrl'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Jugador', function ($stateParams, Jugador) {
                        return Jugador.query();
                    }]
                }
            })
    });
