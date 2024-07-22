import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'messages' })
export class Messages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    userType: string;
    
    @Column('int',{ nullable: true })
    chatId: number;
    
    @Column('varchar',{ nullable: true })
    projectId: string;
    
    @Column('varchar',{ nullable: true })
    supportId: string;

    @Column('varchar')
    messageType: string;

    @Column('varchar',{ nullable: true })    
    urImage: string;

    @Column('varchar')
    messages: string;

    @Column('boolean',{ nullable: true })
    msgEdt: boolean;

    @Column('varchar')
    origin: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
