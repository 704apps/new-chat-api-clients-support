import "reflect-metadata";

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {RefreshToken} from '../../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken'

@Entity({name:'users'})
class Users {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    name: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    role: string;

    @Column('boolean')
    active: boolean;

    @OneToMany(()=>RefreshToken,refleshtoken=>refleshtoken.userId)
    refreshTokens: RefreshToken[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


export {Users}