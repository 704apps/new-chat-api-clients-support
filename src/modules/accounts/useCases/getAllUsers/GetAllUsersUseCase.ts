import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { AppError } from "../../../../error/AppError";
import { Users } from "../../infra/typeorm/Entities/Users";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async getAllUser():Promise<Users> {
    const users = await this.userRepository.allUsers();

    if (!users) {
      throw new AppError('User not found', 400);
    }

    const usersData = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })) as unknown as Users

    return usersData;

  }
}

export { GetAllUsersUseCase };
