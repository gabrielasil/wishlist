import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemEntity {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  categoryId: number;

  @Column()
  price: number;

  @Column()
  store: string;

  @Column()
  url: string;

  @Column()
  image: string;

  @Column()
  priority: string;

  @Column()
  bought: boolean;
}
