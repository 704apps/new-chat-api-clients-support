import { INoteRepository } from "../../../notes/repositories/INoteRepositories";
import { Notes } from "../../../notes/infra/typeorm/Entities/Notes";
declare class GetUpdateNoteUseCase {
    private noteRepository;
    constructor(noteRepository: INoteRepository);
    getUpdateNote(id: number, note: string): Promise<Notes>;
}
export { GetUpdateNoteUseCase };
