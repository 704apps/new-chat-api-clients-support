import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";



@Entity({name:'refleshToken'})
export class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    expiriesIn: number;

    @Column('int')
    userId: number;
    

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
