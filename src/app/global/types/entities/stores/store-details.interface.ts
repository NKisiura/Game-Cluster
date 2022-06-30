import { Entity } from '../entity';
import { StoreInterface } from './store.interface';

export interface StoreDetailsInterface extends Entity, StoreInterface {
  readonly description: string;
}
