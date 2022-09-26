import { StoreInterface } from './store.interface';

export interface StoreDetailsInterface extends StoreInterface {
  readonly description: string;
}
