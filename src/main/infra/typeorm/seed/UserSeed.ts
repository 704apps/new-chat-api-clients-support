import { myDataSource } from '../connection/app-data-source'; // Importando a configuração do TypeORM
import { Users } from '../../../../modules/accounts/infra/typeorm/Entities/Users';


const bcrypt = require('bcryptjs');

export class UserSeed {
  static async run() {
    const userRepository = myDataSource.getRepository(Users);

    
    const users = [
      { name: 'Master', email: 'master@example.com', password: '1234567890', role: 'MASTER', active: true }
    ];

    for (const userData of users) {
      const passwordHash = await (0, bcrypt.hash)(userData.password, 8);

      const user = userRepository.create({...userData, password: passwordHash});
      await userRepository.save(user);
    }

    console.log('Users seeded successfully!');
  }
}
