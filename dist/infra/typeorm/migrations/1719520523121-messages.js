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
exports.Messages1719520523121 = void 0;
const typeorm_1 = require("typeorm");
class Messages1719520523121 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            new typeorm_1.Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "userType",
                        type: "varchar",
                    },
                    {
                        name: "socketId",
                        type: "varchar",
                    },
                    {
                        name: "messageType",
                        type: "varchar",
                    },
                    {
                        name: "messages",
                        type: "varchar",
                    },
                    {
                        name: "orige",
                        type: "varchar",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            });
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("messages");
        });
    }
}
exports.Messages1719520523121 = Messages1719520523121;
