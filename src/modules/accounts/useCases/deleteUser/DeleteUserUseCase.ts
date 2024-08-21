import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { AppError } from "../../../../error/AppError";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async deleteUser(id: string) {
    const user = await this.userRepository.deleteUser(id);

    if (!user) {
      throw new AppError('User not found', 400);
    }

   
    return user;
  }
}

export { DeleteUserUseCase };
