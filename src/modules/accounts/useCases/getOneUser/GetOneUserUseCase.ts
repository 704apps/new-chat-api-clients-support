import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { AppError } from "../../../../error/AppError";

@injectable()
class GetOneUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async getOneUser(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 400);
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role : user.role,
      active : user.active,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return userData;
  }
}

export { GetOneUserUseCase };
