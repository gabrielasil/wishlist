import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
import { CategoryMapper } from './category.mapper';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOkResponse({
    type: [CategoryDTO],
  })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiOperation({
    description: 'Get all categories',
  })
  async getCategories(): Promise<CategoryDTO[]> {
    const categories = await this.categoryService.findAll();
    console.log(categories);
    return categories.map((category) =>
      CategoryMapper.fromEntityToDTO(category),
    );
  }
}
