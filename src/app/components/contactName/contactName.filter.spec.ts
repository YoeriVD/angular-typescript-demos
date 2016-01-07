import {Contact} from '../contact';

describe('Filter: contactName', () => {
  let contactNameFilter;
  beforeEach(() => {
    angular.mock.module('angularTypescriptDemos.filters');
    inject(($filter: ng.IFilterService) => {
      contactNameFilter = $filter('contactName');
    });
  });

  it('should format the name properly', () => {
    var contact = new Contact('Frank', 'de Boer');
    expect(contactNameFilter(contact)).toBe('Frank de Boer');
  });

});
