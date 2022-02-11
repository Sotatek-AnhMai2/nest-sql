import { Category } from 'src/modules/category/entities/category.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ANIME_DEFAULT_CONTENT, ANIME_ENDING } from '../anime.constant';

@Entity()
export class Anime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: ANIME_DEFAULT_CONTENT })
  content: string;

  @Column()
  rate: number;

  @Column({ default: ANIME_ENDING.HAPPY })
  ending: ANIME_ENDING;

  @ManyToMany(() => Category, { eager: true })
  categories: Category[];
}
