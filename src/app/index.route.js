/** @ngInject */
function routerConfig($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
        .when('/invite', {
        templateUrl: 'app/invite/invite.html',
        controller: 'InviteController',
        controllerAs: 'invite'
    })
        .otherwise({
        redirectTo: '/'
    });
}
exports.routerConfig = routerConfig;
