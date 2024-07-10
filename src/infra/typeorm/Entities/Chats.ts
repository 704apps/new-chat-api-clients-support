import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'chats' })
export class Chats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ nullable: true })
    supportId: string;
    
    @Column('varchar')
    projectId: string;

    @Column('varchar',{ nullable: true })
    statusAttention: string;

    @Column('varchar')
    dateIndex: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
