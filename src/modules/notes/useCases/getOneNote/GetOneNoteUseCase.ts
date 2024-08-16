import { INoteRepository } from "../../repositories/INoteRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Notes } from "../..//infra/typeorm/Entities/Notes";

@injectable()
class GetOneNoteUseCase {

    constructor(
        @inject("NoteRepository")
        private noteRepository: INoteRepository
    ){}

    public async getOneNote(id: number):Promise<Notes> {
        try {

            const note = await this.noteRepository.getOneNote(id);

            return note

        } catch (error) {

            throw new AppError('Error when update Note!', 400, { error })

        }
    }
}

export {GetOneNoteUseCase}