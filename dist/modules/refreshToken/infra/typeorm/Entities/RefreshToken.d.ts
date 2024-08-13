import { Users } from "../../../../../modules/accounts/infra/typeorm/Entities/Users";
declare class RefreshToken {
    id: string;
    expiriesIn: number;
    userId: Users;
    createdAt: Date;
    updatedAt: Date;
}
export { RefreshToken };
