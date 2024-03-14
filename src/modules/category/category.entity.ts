import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category', { schema: 'public' })
export class CategoryEntity extends BaseEntity {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
