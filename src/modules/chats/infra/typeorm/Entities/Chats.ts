import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'chats' })
export class Chats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ nullable: true })
    supportId: string;
    
    @Column('varchar')
    projectId: string;
     // supportId projectId statusAttention dateIndex
    @Column('varchar',{ nullable: true })
    statusAttention: string;

    @Column('date')
    dateIndex: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
