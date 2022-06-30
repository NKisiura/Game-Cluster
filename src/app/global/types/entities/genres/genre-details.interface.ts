import { Entity } from '../entity';
import { GenreInterface } from './genre.interface';

export interface GenreDetailsInterface extends Entity, GenreInterface {
  readonly description: string;
}
