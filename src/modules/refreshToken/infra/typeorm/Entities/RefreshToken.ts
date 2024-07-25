import { Users } from "@modules/accounts/infra/typeorm/Entities/Users";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne } from "typeorm";



@Entity({name:'refreshToken'})
export class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    expiriesIn: number;


    @ManyToOne(() => Users, user => user.refreshTokens, { onDelete: "CASCADE" })
    userId: Users;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
