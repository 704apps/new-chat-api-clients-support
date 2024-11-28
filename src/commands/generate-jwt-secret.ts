import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const secret = crypto.randomBytes(64).toString('hex');

const envFilePath = path.resolve(__dirname, '../../.env');

function updateEnvFile(secret: string) {
  const envVar = `SECRET_JWT=${secret}\n`;
  
  if (fs.existsSync(envFilePath)) {
    const envFileContent = fs.readFileSync(envFilePath, 'utf-8');
    
    if (envFileContent.includes('SECRET_JWT=\'')) {
      const updatedEnvContent = envFileContent.replace(/SECRET_JWT='.*/g, envVar);
      fs.writeFileSync(envFilePath, updatedEnvContent);
    } else {
      fs.appendFileSync(envFilePath, envVar);
    }
  } else {
    fs.writeFileSync(envFilePath, envVar);
  }
}

updateEnvFile('\'' + secret + '\'');
console.log(`JWT Secret gerado: ${secret}`);
