import { INoteRepository } from "../../repositories/INoteRepositories";
import { Notes } from "../..//infra/typeorm/Entities/Notes";
declare class GetOneNoteUseCase {
    private noteRepository;
    constructor(noteRepository: INoteRepository);
    getOneNote(id: number): Promise<Notes>;
}
export { GetOneNoteUseCase };
