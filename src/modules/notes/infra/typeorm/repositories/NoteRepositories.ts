import { Repository } from 'typeorm'
import { myDataSource } from '../../../../../main/infra/typeorm/connection/app-data-source';
import { ChatDTO } from "../../../../../modules/chats/DTOs/chatDTO";
import {  Notes } from "../Entities/Notes";
import { io } from '../../../../../main/infra/http/server';
import { AppError } from '../../../../../error/AppError';
import { NoteDTO } from '../../../DTOs/NoteDTO';
import { INoteRepository } from '../../../repositories/INoteRepositories'


//implements INoteRepository
class NoteRepository implements INoteRepository {
    private repositoryNotes: Repository<Notes>;

    constructor() {
        this.repositoryNotes = myDataSource.getRepository(Notes)
    }
    async getOneNote(id: number): Promise<Notes> {
        const getNote = await this.repositoryNotes.findOneBy({id})

        if(!getNote){
            throw new AppError('Note not found');
        }
        return getNote
    }

    async deleteNote(id: number): Promise<String> {
        const getNote = await this.repositoryNotes.findOneBy({id})
      
        if(!getNote){
            throw new AppError('Note not found');

        }

        await this.repositoryNotes.delete({ id });


        return "Note deleted successfully";

    }
   

    async updateNote(id: number,note:string): Promise<Notes> {

        const getNote = await this.repositoryNotes.findOneBy({id})
      
        if(!getNote){
            throw new AppError('Note not found');

        }

        getNote.note = note

        const noteUpdaded = await this.repositoryNotes.save(getNote);

        return noteUpdaded


    }

    async createNote(infochat: NoteDTO): Promise<Notes> {
        const { supportId,chatId ,note} = await infochat
        const createNote = await this.repositoryNotes.create({
            supportId,
            chatId,
            note
         
        });
        const noteCreated = await this.repositoryNotes.save(createNote)

        return noteCreated
    }

}

export {NoteRepository}