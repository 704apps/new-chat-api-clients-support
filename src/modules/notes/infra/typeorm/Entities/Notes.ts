import { Messages } from "../../../../messages/infra/typeorm/Entities/Messages";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'notes' })
class Notes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ nullable: true })
    supportId: string;
    
    @Column('varchar',{ nullable: true })
    note: string;

    @Column('varchar')
    chatId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export {Notes}