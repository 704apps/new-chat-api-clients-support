"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _CreateUserUseCase = require("./CreateUserUseCase");
class CreateUserController {
  async handle(request, response) {
    try {
      const {
        name,
        email,
        password,
        role
      } = request.body;
      if (!name || !email || !password || !role) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const createUseCase = await _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);
      const user = await createUseCase.execute({
        name,
        email,
        password,
        role
      });
      return response.status(201).json({
        message: 'User created successfully',
        user
      });
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.CreateUserController = CreateUserController;