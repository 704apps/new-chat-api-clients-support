export class MockResponse {
    status(statusCode: number) {
      console.log(`Status: ${statusCode}`);
      return this;
    }
    json(data: any) {
      console.log(`JSON response:`, data);
      return this;
    }
  }
  