import { INoteRepository } from "../../repositories/INoteRepositories";
import { Notes } from "../..//infra/typeorm/Entities/Notes";
declare class GetAllNoteChatUseCase {
    private noteRepository;
    constructor(noteRepository: INoteRepository);
    getAllNotesSupportID(chatID: string): Promise<Notes[]>;
}
export { GetAllNoteChatUseCase };
