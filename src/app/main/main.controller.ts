import {Contact} from '../components/contact';

export class MainController {
  name: string;
  newContact: Contact;
  contacts: Contact[];

  /* @ngInject */
  constructor() {
    this.newContact = new Contact();
    this.contacts = [
      new Contact('Frank', 'Muscles', 'frank@muscles.com'),
      new Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
    ];
  }

  saveContact() {
    this.contacts.push(this.newContact);
    this.newContact = new Contact();
  }
}
