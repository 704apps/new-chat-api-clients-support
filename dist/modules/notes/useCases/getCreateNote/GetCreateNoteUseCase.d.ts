import { INoteRepository } from "../../repositories/INoteRepositories";
import { NoteDTO } from "../../DTOs/NoteDTO";
import { Notes } from "../../infra/typeorm/Entities/Notes";
declare class GetCreateNoteUseCase {
    private NoteRepository;
    constructor(NoteRepository: INoteRepository);
    getCreateNote(infoNote: NoteDTO): Promise<Notes>;
}
export { GetCreateNoteUseCase };
