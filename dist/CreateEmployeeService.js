"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateEmployeeService = /** @class */ (function () {
    function CreateEmployeeService() {
    }
    CreateEmployeeService.prototype.execute = function (name, company) {
        console.log(name, company);
    };
    return CreateEmployeeService;
}());
exports.default = new CreateEmployeeService();
