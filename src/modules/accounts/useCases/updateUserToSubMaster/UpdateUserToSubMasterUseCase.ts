import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { AppError } from "../../../../error/AppError";

@injectable()
class UpdateUserToSubMasterUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async updateUserToSubMaster(id: string, role: string) {
    const user = await this.userRepository.updateUserToSubMaster(id, role);

    if (!user) {
      throw new AppError('User not found', 400);
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      supportId: user.name,
      active: user.active,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return userData;
  }
}

export { UpdateUserToSubMasterUseCase };
