var contact_1 = require('../contact');
describe('Filter: contactName', function () {
    var contactNameFilter;
    beforeEach(function () {
        angular.mock.module('angularTypescriptDemos.filters');
        inject(function ($filter) {
            contactNameFilter = $filter('contactName');
        });
    });
    it('should format the name properly', function () {
        var contact = new contact_1.Contact('Frank', 'de Boer');
        expect(contactNameFilter(contact)).toBe('Frank de Boer');
    });
});
