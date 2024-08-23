import { Messages } from "./Messages";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'oldMessage' })
 class  OldMessages {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Messages, message => message.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'idMessage' })
    idMessage: Messages;
    
    @Column('varchar')
    oldMessage: string;

    @Column('varchar',{ nullable: true })
    supportId: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
export {OldMessages}