import 'reflect-metadata';
import { myDataSource } from './main/infra/typeorm/connection/app-data-source';
import { UserSeed } from './main/infra/typeorm/seed/UserSeed';

async function runSeed() {
  try {
    await myDataSource.initialize();
    
    await UserSeed.run(); 
  } catch (error) {
    console.error('Error during Data Source initialization', error);
  } finally {
    await myDataSource.destroy();
  }
}

runSeed();
