import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { getDataSource } from 'src/config/data-source.configuration';

@Injectable()
export class CategoryService {
  constructor() {}

  async findAll(): Promise<CategoryEntity[]> {
    const AppDataSource = await getDataSource();
    const categoryRepository = AppDataSource.getRepository(CategoryEntity);
    return categoryRepository.find();
  }
}
