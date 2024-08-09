"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockResponse = void 0;
class MockResponse {
  status(statusCode) {
    console.log(`Status: ${statusCode}`);
    return this;
  }
  json(data) {
    console.log(`JSON response:`, data);
    return this;
  }
}
exports.MockResponse = MockResponse;