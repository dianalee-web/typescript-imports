"use strict";
exports.__esModule = true;
exports.person = {
    firstName: 'Elias',
    lastName: 'Telahun'
};
function greet(name) {
    return "Nice to meet you, " + this.firstName + ".";
}
exports.greet = greet;
