import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'messages' })
export class Messages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    userType: string;
    
    @Column('varchar')
    socketId: string;

    @Column('varchar',{ nullable: true })
    projectId: string;

    @Column('varchar')
    messageType: string;

    @Column('varchar')
    messages: string;

    @Column('boolean')
    msgEdt: boolean;

    @Column('varchar')
    orige: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
