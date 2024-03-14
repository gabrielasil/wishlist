import { DataSource, DataSourceOptions } from 'typeorm';
import { DatabaseConfiguration } from './typeorm.config';

const databaseConfiguration = new DatabaseConfiguration();
const AppDataSource = new DataSource(
  databaseConfiguration.createTypeOrmOptions() as DataSourceOptions,
);

AppDataSource.initialize()
  .then(async () => {
    console.log('Connection initialized with database...');
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject('Failed to create connection with database');
    }, delay);
  });
};
