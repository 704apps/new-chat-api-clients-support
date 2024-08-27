import { Notes } from "../Entities/Notes";
import { NoteDTO } from '../../../DTOs/NoteDTO';
import { INoteRepository } from '../../../repositories/INoteRepositories';
declare class NoteRepository implements INoteRepository {
    private repositoryNotes;
    constructor();
    getAllNotesSupportID(chatId: string): Promise<Notes[]>;
    getOneNote(id: number): Promise<Notes>;
    deleteNote(id: number): Promise<String>;
    updateNote(id: number, note: string): Promise<Notes>;
    createNote(infochat: NoteDTO): Promise<Notes>;
}
export { NoteRepository };
