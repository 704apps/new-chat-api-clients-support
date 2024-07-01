import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";



@Entity({name:'contacts'})
export class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
