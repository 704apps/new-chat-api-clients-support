import { Users } from "../../../../../modules/accounts/infra/typeorm/Entities/Users";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";



@Entity({name:'refreshToken'})
class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('int')
    expiriesIn: number;

     
    // @Column('varchar')
    // userId: string;

    @ManyToOne(() => Users,userId => userId.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'userId' })
    userId: Users;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}


export {RefreshToken}