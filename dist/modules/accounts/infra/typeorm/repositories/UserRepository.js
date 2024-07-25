"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const app_data_source_1 = require("@main/infra/typeorm/connection/app-data-source");
const Users_1 = require("../Entities/Users");
const AppError_1 = require("@error/AppError");
class UserRepository {
    constructor() {
        this.repository = app_data_source_1.myDataSource.getRepository(Users_1.Users);
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, avatar, email, password, driver_license }) {
            const user = yield this.repository.create({
                name,
                email,
                password
            });
            yield this.repository.save(user);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOneBy({ email });
            if (!user) {
                throw new AppError_1.AppError('User not found');
            }
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOneBy({ id });
            if (!user) {
                throw new AppError_1.AppError('User not found');
            }
            return user;
        });
    }
}
exports.UserRepository = UserRepository;
