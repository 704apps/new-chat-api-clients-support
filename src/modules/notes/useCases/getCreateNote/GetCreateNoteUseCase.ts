import { INoteRepository } from "../../repositories/INoteRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { NoteDTO } from "../../DTOs/NoteDTO";
import { Notes } from "../../infra/typeorm/Entities/Notes";


@injectable()
class GetCreateNoteUseCase {

    constructor(
        @inject("NoteRepository")
        private NoteRepository: INoteRepository
    ){}

    public async getCreateNote(infoNote: NoteDTO):Promise<Notes> {
        try {

            const noteCreated = await this.NoteRepository.createNote(infoNote);

            return noteCreated

        } catch (error) {

            throw new AppError('Error when update Note!', 400, { error })

        }
    }
}

export {GetCreateNoteUseCase}