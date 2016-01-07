var feedback_directive_1 = require('./feedback.directive');
describe('directive: feedback', function () {
    var $scope, $compile, $window;
    beforeEach(function () {
        angular.mock.module('angularTypescriptDemos.directives');
        inject(function (_$compile_, _$window_, $rootScope) {
            $compile = _$compile_;
            $window = _$window_;
            $scope = $rootScope.$new();
            spyOn($window, 'alert');
        });
    });
    it('should send feedback to a web service (controller as)', function () {
        // arrange
        var element = $compile('<feedback></feedback>')($scope);
        var controller = element.controller('feedback');
        // act
        controller.feedback = new feedback_directive_1.Feedback('positive', 'super');
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
