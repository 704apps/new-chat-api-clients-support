import { IChatRepository } from "../../../chats/repositories/IChatRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Chats } from "../../../chats/infra/typeorm/Entities/Chats";
import { INoteRepository } from "../../../notes/repositories/INoteRepositories";
import { Notes } from "../../../notes/infra/typeorm/Entities/Notes";

@injectable()
class GetUpdateNoteUseCase {

    constructor(
        @inject("NoteRepository")
        private noteRepository: INoteRepository
    ){}

    public async getUpdateNote(id: number,note:string):Promise<Notes> {
        try {

            const getUpdateNoteUseCase = await this.noteRepository.updateNote(id,note);

            return getUpdateNoteUseCase

        } catch (error) {

            throw new AppError('Error when update chat!', 400, { error })

        }
    }
}

export {GetUpdateNoteUseCase}