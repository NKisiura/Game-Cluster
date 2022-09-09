import { StoreInterface } from '../../../../global/types/entities/stores/store.interface';

export interface GetStoresResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: StoreInterface[] | null;
}
