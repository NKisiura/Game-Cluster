import { TagInterface } from './tag.interface';
import { Entity } from '../entity';

export interface TagDetailsInterface extends Entity, TagInterface {
  readonly description: string;
}
