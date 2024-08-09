import { Messages } from "../../../../messages/infra/typeorm/Entities/Messages";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'chats' })
class Chats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ nullable: true })
    supportId: string;
    
    @Column('varchar')
    projectId: string;
     // supportId projectId statusAttention dateIndex
    @Column('varchar',{ nullable: true })
    statusAttention: string;

    // @OneToMany(()=>Messages,message=>message.chatId)
    // message: Messages[]


    @Column('date')
    dateIndex: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export {Chats}