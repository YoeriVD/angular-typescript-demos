function contactNameFilter() {
    return function (input) { return input.firstname + ' ' + input.surname; };
}
exports.contactNameFilter = contactNameFilter;
