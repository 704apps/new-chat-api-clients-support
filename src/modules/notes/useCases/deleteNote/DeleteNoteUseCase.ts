import { INoteRepository } from "../../repositories/INoteRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Notes } from "../../infra/typeorm/Entities/Notes";

@injectable()
class DeleteNoteUseCase {

    constructor(
        @inject("NoteRepository")
        private noteRepository: INoteRepository
    ){}

    public async getNoteDelete(id: number):Promise<String> {
        try {

            const noteDelete = await this.noteRepository.deleteNote(id);

            return noteDelete

        } catch (error) {

            throw new AppError('Error when update Note!', 400, { error })

        }
    }
}

export {DeleteNoteUseCase}