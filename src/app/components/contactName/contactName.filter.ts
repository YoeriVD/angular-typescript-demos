import {Contact} from '../contact';
export function contactNameFilter() {
  return (input: Contact) => input.firstname + ' ' + input.surname;
}
