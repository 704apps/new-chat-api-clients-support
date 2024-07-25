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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefleshTokenRepostory = void 0;
const RefleshToken_1 = require("../Entities/RefleshToken");
const app_data_source_1 = require("@main/infra/typeorm/connection/app-data-source");
const dayjs_1 = __importDefault(require("dayjs"));
const AppError_1 = require("@error/AppError");
const Users_1 = require("@modules/accounts/infra/typeorm/Entities/Users");
class RefleshTokenRepostory {
    constructor() {
        this.repositoryRefleshToken = app_data_source_1.myDataSource.getRepository(RefleshToken_1.RefleshToken);
        this.repositoryUsers = app_data_source_1.myDataSource.getRepository(Users_1.Users);
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const expiriesIn = (0, dayjs_1.default)().add(20, 'seconds').unix(); //unix cria um numererico
            const user = yield this.repositoryUsers.findOneBy({ id: userId });
            if (!user) {
                throw new AppError_1.AppError('Error when generating reflash token ');
            }
            const generateRefleshToken = this.repositoryRefleshToken.create({
                userId,
                expiriesIn
            });
            return generateRefleshToken;
        });
    }
}
exports.RefleshTokenRepostory = RefleshTokenRepostory;
