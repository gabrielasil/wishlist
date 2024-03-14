import { CategoryDTO } from './dto/category.dto';
import { CategoryEntity } from './category.entity';

export class CategoryMapper {
  static fromEntityToDTO(entity: CategoryEntity): CategoryDTO {
    const dto = new CategoryDTO();
    dto.id = entity.id;
    dto.name = entity.name;
    return dto;
  }
}
