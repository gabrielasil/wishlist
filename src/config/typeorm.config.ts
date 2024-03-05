import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { snakeNamingStrategy } from './typeorm-postgres-naming-strategy.instance';
import { DataSource } from 'typeorm';

const commonConf = {
  SYNCHRONIZE: false,
  ENTITIES: [`${__dirname}/../modules/**/*.entity.{js,ts}`],
  MIGRATIONS: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],
  CLI: {
    migrationsDir: 'src/database/migrations',
  },
  MIGRATIONS_RUN: false,
  MIGRATIONS_TABLE_NAME: 'migrations_typeorm',
  NAMING_STRATEGY: snakeNamingStrategy,
};

export const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  migrationsRun: commonConf.MIGRATIONS_RUN,
  migrationsTableName: commonConf.MIGRATIONS_TABLE_NAME,
  namingStrategy: commonConf.NAMING_STRATEGY,
};

export default new DataSource(typeOrmConfig);
