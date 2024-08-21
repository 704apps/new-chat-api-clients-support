import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { AppError } from "../../../../error/AppError";

@injectable()
class DisableUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async disableUser(id: string,action:boolean) {
    const user = await this.userRepository.disableUser(id,action);

    if (!user) {
      throw new AppError('User not found', 400);
    }

   
    return user;
  }
}

export { DisableUserUseCase };
