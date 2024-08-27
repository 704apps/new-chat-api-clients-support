import { INoteRepository } from "../../repositories/INoteRepositories";
declare class DeleteNoteUseCase {
    private noteRepository;
    constructor(noteRepository: INoteRepository);
    getNoteDelete(id: number): Promise<String>;
}
export { DeleteNoteUseCase };
