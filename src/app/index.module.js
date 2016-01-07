/// <reference path="../../.tmp/typings/tsd.d.ts" />
var index_config_1 = require('./index.config');
var index_route_1 = require('./index.route');
var index_run_1 = require('./index.run');
var main_controller_1 = require('./main/main.controller');
var contactName_filter_1 = require('./components/contactName/contactName.filter');
var feedback_directive_1 = require('./components/feedback/feedback.directive');
var AngularTypescriptDemos;
(function (AngularTypescriptDemos) {
    'use strict';
    angular.module('angularTypescriptDemos.filters', [])
        .filter('contactName', contactName_filter_1.contactNameFilter);
    angular.module('angularTypescriptDemos.directives', [])
        .directive('feedback', feedback_directive_1.FeedbackDirective);
    angular.module('angularTypescriptDemos', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr', 'angularTypescriptDemos.filters', 'angularTypescriptDemos.directives'])
        .constant('moment', moment)
        .config(index_config_1.config)
        .config(index_route_1.routerConfig)
        .run(index_run_1.runBlock)
        .controller('MainController', main_controller_1.MainController);
})(AngularTypescriptDemos || (AngularTypescriptDemos = {}));
