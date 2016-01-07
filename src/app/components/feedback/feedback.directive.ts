export function FeedbackDirective() : angular.IDirective  {

  return {
    restrict: 'E',
    template: '<aside id="feedback">' +
    '<div class="bar">' +
    '	<h3>Feedback</h3>' +
    '	<span class="pos" ng-click="ctrl.feedback.type = \'positive\'">&check;</span>' +
    '	<span class="neg" ng-click="ctrl.feedback.type = \'negative\'">&times;</span>' +
    '</div>' +
    '<div class="form" ng-hide="ctrl.feedback.type == undefined">' +
    '	<h3 class="pos" ng-show="ctrl.feedback.type == \'positive\'">Positive feedback</h3>' +
    '	<h3 class="neg" ng-show="ctrl.feedback.type == \'negative\'">Negative feedback</h3>' +
    '	<form ng-submit="ctrl.sendFeedback()">' +
    '		<textarea ng-model="ctrl.feedback.message" ' +
    '		          class="form-control"></textarea>' +
    '		<button class="btn">Send</button>' +
    '	</form>' +
    '</div>' +
    '</aside>',
    scope: {
      debug: '@'
    },
    controller: FeedbackController,
    controllerAs: 'ctrl',
    bindToController: true
  };

}

export class FeedbackController {

  public feedback: Feedback;
  public debug: any;

  /** @ngInject */
  constructor(private $log: angular.ILogService, private $window: angular.IWindowService) {
  }

  sendFeedback() {
    if (angular.isDefined(this.debug)) {
      this.$log.log('Submitted feedback:', this.feedback);
    } else {
      // send feedback to webserver
      this.$window.alert('Currently not supported');
    }
    this.feedback = null;
  }

}

export class Feedback {
  constructor(public type?: string, public message?: string) { }
}
