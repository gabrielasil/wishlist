import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryEntity } from './category.entity';

@Module({
  providers: [CategoryService],
  imports: [CategoryEntity],
  controllers: [CategoryController],
})
export class CategoryModule {}
