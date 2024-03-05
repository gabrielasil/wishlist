import { DataSource, DataSourceOptions } from 'typeorm';
import { DatabaseConfiguration } from './typeorm.config';

const databaseConfiguration = new DatabaseConfiguration();
export default new DataSource(
  databaseConfiguration.createTypeOrmOptions() as DataSourceOptions,
);
