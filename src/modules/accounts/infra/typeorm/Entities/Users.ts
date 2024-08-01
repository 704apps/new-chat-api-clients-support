import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {RefreshToken} from '@modules/refreshToken/infra/typeorm/Entities/RefreshToken'

@Entity({name:'users'})
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(()=>RefreshToken,refleshtoken=>refleshtoken.userId)
    refreshTokens: RefreshToken[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
