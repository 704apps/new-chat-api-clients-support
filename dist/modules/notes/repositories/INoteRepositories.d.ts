import { NoteDTO } from '../DTOs/NoteDTO';
import { Notes } from '../infra/typeorm/Entities/Notes';
export interface INoteRepository {
    getOneNote(id: number): Promise<Notes>;
    updateNote(id: number, note: string): Promise<Notes>;
    deleteNote(id: number): Promise<String>;
    createNote(infochat: NoteDTO): Promise<Notes>;
}
