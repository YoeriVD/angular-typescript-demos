var contact_1 = require('../components/contact');
var MainController = (function () {
    /* @ngInject */
    function MainController() {
        this.newContact = new contact_1.Contact();
        this.contacts = [
            new contact_1.Contact('Frank', 'Muscles', 'frank@muscles.com'),
            new contact_1.Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
        ];
    }
    MainController.prototype.saveContact = function () {
        this.contacts.push(this.newContact);
        this.newContact = new contact_1.Contact();
    };
    return MainController;
})();
exports.MainController = MainController;
