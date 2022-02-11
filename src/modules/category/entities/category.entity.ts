import { Anime } from 'src/modules/anime/entities/anime.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Anime, { onDelete: 'SET NULL' })
  animeList: Anime[];
}
