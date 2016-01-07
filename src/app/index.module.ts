/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { contactNameFilter } from './components/contactName/contactName.filter';
import { FeedbackDirective } from './components/feedback/feedback.directive';

module AngularTypescriptDemos {
  'use strict';

  angular.module('angularTypescriptDemos.filters', [])
    .filter('contactName', contactNameFilter);

  angular.module('angularTypescriptDemos.directives', [])
    .directive('feedback', FeedbackDirective);

  angular.module('angularTypescriptDemos', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr', 'angularTypescriptDemos.filters', 'angularTypescriptDemos.directives'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController);


}
