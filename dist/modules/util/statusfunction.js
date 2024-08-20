"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockResponse = void 0;
var MockResponse = /** @class */ (function () {
    function MockResponse() {
    }
    MockResponse.prototype.status = function (statusCode) {
        //  console.log(`Status: ${statusCode}`);
        return this;
    };
    MockResponse.prototype.json = function (data) {
        //   console.log(`JSON response:`, data);
        return this;
    };
    return MockResponse;
}());
exports.MockResponse = MockResponse;
