import { FeedbackController, Feedback } from './feedback.directive';

describe('directive: feedback', () => {
  let $scope: angular.IScope, $compile: angular.ICompileService, $window: angular.IWindowService;

  beforeEach(() => {
    angular.mock.module('angularTypescriptDemos.directives');
    inject((_$compile_: angular.ICompileService, _$window_: angular.IWindowService, $rootScope: angular.IRootScopeService) => {
      $compile = _$compile_;
      $window = _$window_;
      $scope = $rootScope.$new();

      spyOn($window, 'alert');
    });
  });

  it('should send feedback to a web service (controller as)', function () {
    // arrange
    let element = $compile('<feedback></feedback>')($scope);
    let controller: FeedbackController = element.controller('feedback');

    // act
    controller.feedback = new Feedback('positive', 'super');
    controller.sendFeedback();

    // assert
    expect($window.alert).toHaveBeenCalled();
  });

  it('should support printing feedback to the console (controller as)', function () {
    // arrange
    var element = $compile('<feedback debug></feedback>')($scope);
    var controller = element.controller('feedback');

    // act
    controller.feedback = { type: 'positive', message: 'super' };
    controller.sendFeedback();

    // assert
    expect($window.alert).not.toHaveBeenCalled();
  });
});
