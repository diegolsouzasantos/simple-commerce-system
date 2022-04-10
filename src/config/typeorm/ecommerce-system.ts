import path from 'path';
import config from '../env';

export default {
  host: config.database.host,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  port: config.database.port,
  entities: [path.resolve(__dirname, '../../entities/*.ts')],
  migrations: [path.resolve(__dirname, '../../migrations/*.ts')],
  seeds: [path.resolve(__dirname, '../../seeds/*.ts')],
  cli: {
    migrationsDir: path.resolve(__dirname, '../../migrations/*.ts'),
    entitiesDir: path.resolve(__dirname, '../../entities/*.ts')
  }
};
