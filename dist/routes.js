"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = void 0;
var CreateEmployeeService_1 = __importDefault(require("./CreateEmployeeService"));
function createEmployee(request, response) {
    CreateEmployeeService_1.default.execute("Lucas", "Multiplier");
    return response.send();
}
exports.createEmployee = createEmployee;
