import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";



@Entity({name:'contacts'})
 class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    projectId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
export {Contacts}